import { Navbar, Nav, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartDisplay from "./CartDisplay";
import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import SearchBar from "./SearchBar";

function MainNavbar() {
  const { isCartDisplayVisible, setCartDisplayVisible } =
    useContext(CartContext);

  const handleCartClick = () => {
    setCartDisplayVisible(!isCartDisplayVisible);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand as={NavLink} to={"/"} className="">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to={"/collection"}>
              Collection
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/catalog"}>
              Catalog
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/about"}>
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/blog"}>
              Blog
            </Nav.Link>
          </Nav>
          <Nav className="">
            <SearchBar />
            <Nav.Link as={NavLink} to={"/account"}>
              My Account
            </Nav.Link>
            <Nav.Link onClick={handleCartClick}>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={isCartDisplayVisible} onHide={handleCartClick} scrollable>
        <Modal.Body>
          <CartDisplay onClose={handleCartClick} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MainNavbar;
