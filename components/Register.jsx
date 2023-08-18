import { useState } from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Register({ closeModal }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="text-end ">
        <Button className="bg-white border-0" onClick={() => closeModal()}>
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
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form className="mx-auto m-4" onSubmit={handleSubmit}>
              <h1 className="mb-5 fs-2">Register</h1>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mt-2" controlId="emailOffers">
                <Form.Check
                  type="checkbox"
                  label="Yes, sign me up for emails to get exclusive offers"
                  defaultChecked
                  style={{ fontSize: "13px" }}
                />
              </Form.Group>
              <div className="text-center align-items-center mt-2 d-flex">
                <Button
                  variant="dark"
                  onClick={() => {
                    alert("registered");
                    closeModal();
                  }}
                  className="mt-3"
                >
                  Register
                </Button>{" "}
                <span style={{ fontSize: "13px" }} className="mx-2 mt-3">
                  or
                </span>
                <Nav.Link
                  as={NavLink}
                  to="/collection"
                  style={{ fontSize: "13px" }}
                  className="text-decoration-none mx-1 mt-3"
                >
                  return to shop
                </Nav.Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
Register.propTypes = {
  closeModal: PropTypes.func.isRequired, // Add this line
};
