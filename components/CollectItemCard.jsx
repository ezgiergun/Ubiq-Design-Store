import PropTypes from "prop-types";
import { Card, Button, Nav } from "react-bootstrap";
import { CartContext } from "../context/CartContex";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function CollectItemCard({ imageUrl, name, price }) {
  const { setCartDisplayVisible, addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    setCartDisplayVisible(true);
    addToCart({ imageUrl, name, price });
  };

  return (
    <>
      <Card style={{ border: "none" }} className="mb-4 text-center">
        <Nav.Link as={NavLink} to={`/products/${name}`}>
          <Card.Img
            variant="top"
            src={imageUrl || "https://placehold.co/615x615/blue/white"}
            alt={name}
            style={{
              maxHeight: "250px",
              objectFit: "cover",
            }}
            className="rounded-2"
          />
        </Nav.Link>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <div className="text-center ">
            <Nav.Link
              as={NavLink}
              to={`/products/${name}`}
              className="mx-5 my-1"
              style={{ position: "absolute" }}
            >
              <Button size="sm" variant="light">
                DISCOVER
              </Button>
            </Nav.Link>
            <Button
              size="sm"
              variant="dark"
              className="p-2 mx-2"
              onClick={handleAddToCart}
              style={{ position: "absolute" }}
            >
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CollectItemCard;

CollectItemCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
