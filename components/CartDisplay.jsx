import { useContext, useEffect, useRef, useCallback } from "react";
import { Button, Image, Col, Row, Container } from "react-bootstrap";
import { CartContext } from "../context/CartContex";
import PropTypes from "prop-types";

const CartDisplay = ({ onClose }) => {
  const { cartItems, handleQuantityChange } = useContext(CartContext);
  const cartRef = useRef();

  const handleOutsideClick = useCallback(
    (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const handleScroll = (e) => {
      if (cartRef.current && cartRef.current.contains(e.target)) {
        e.stopPropagation();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("scroll", handleScroll, { passive: false });
    };
  }, [handleOutsideClick]);

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const totalPrice = calculateTotalPrice(cartItems);

  return (
    <>
      <div className="text-end ">
        <Button className="bg-white border-0" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 512 512"
          >
            {" "}
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
          </svg>
        </Button>
      </div>

      <h2 className="my-4 text-start mx-2">Items Currently In Your Cart</h2>

      {cartItems.map((item, index) => (
        <Container
          key={item.name}
          className={`mb-4 ${
            index < cartItems.length - 1 ? "border-bottom pb-2" : ""
          }`}
        >
          <Row className="align-items-center">
            <Col xs={4} className="d-flex justify-content-center">
              <Image
                className="rounded-1"
                src={item.imageUrl}
                alt={item.name}
                fluid
              />
            </Col>
            <Col xs={8}>
              <Row className="mb-2">
                <Col>
                  <span className="">{item.name}</span>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col xs={4} className="d-flex mx-1">
                  <Button
                    variant="link"
                    className="text-secondary"
                    onClick={() =>
                      handleQuantityChange(item, item.quantity - 1)
                    }
                    style={{ textDecoration: "none" }}
                  >
                    –
                  </Button>
                  <input
                    type="text"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item, parseInt(e.target.value))
                    }
                    className="border border-grey text-center text-secondary"
                    style={{ maxWidth: "45px", borderRadius: "4px" }}
                  />
                  <Button
                    variant="link"
                    className="text-secondary"
                    onClick={() =>
                      handleQuantityChange(item, item.quantity + 1)
                    }
                    style={{ textDecoration: "none" }}
                  >
                    +
                  </Button>
                </Col>
                <Col xs={7} className="d-flex my-3 justify-content-end">
                  <span className="">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ))}
      <Row className="justify-content-end" style={{ marginRight: "27px" }}>
        <Col md={2}>Total:</Col>
        <Col md={2} className="" xs="auto">
          ${totalPrice.toFixed(2)}
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} className="text-center">
          <Button
            onClick={() => {
              alert("Checked out");
            }}
            variant="dark"
          >
            CHECKOUT
          </Button>
        </Col>
      </Row>
    </>
  );
};

CartDisplay.propTypes = {
  onClose: PropTypes.func.isRequired,
  clickedItem: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};
export default CartDisplay;
