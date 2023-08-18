import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Form, Button, Modal, Nav } from "react-bootstrap";
import Register from "./Register";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleRegisterClick() {
    setShowRegisterModal(true);
  }

  function handleCloseRegisterModal() {
    setShowRegisterModal(false);
  }

  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="mb-5 mx-5 text-center">
            <Form onSubmit={handleSubmit}>
              <h1 className="mb-4  font-semibold ">Login To Your Account</h1>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-3"
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-3"
                />
              </Form.Group>
              <p>
                <NavLink to="/forgot-password">Forgot Password?</NavLink>
              </p>
              {email !== "" && password !== "" && (
                <div className="text-center align-items-center justify-content-center mt-2 d-flex">
                  <Button
                    variant="dark"
                    onClick={() => alert("logged in!")}
                    className="mt-3"
                  >
                    Sign In
                  </Button>
                  <span style={{ fontSize: "13px" }} className="mx-1 mt-3">
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
              )}
            </Form>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h1 className="mb-4 text-xl font-semibold text-zinc-600">
              Create New Account
            </h1>
            <p className="font-semibold text-zinc-400">
              Register your account for a faster checkout process.
            </p>
            <Button
              onClick={handleRegisterClick}
              variant="dark"
              className="mt-3"
            >
              Create Account
            </Button>
          </Col>
        </Row>
        <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
          <Modal.Body>
            <Register closeModal={handleCloseRegisterModal} />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default Login;
