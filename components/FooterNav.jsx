import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function FooterNav() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p
              className="text-center text-md-start m-1"
              style={{ fontSize: "12px", opacity: 0.7 }}
            >
              Copyright © {new Date().getFullYear()} All rights reserved. Site
              by Loomer.
            </p>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center justify-content-md-end">
              <p className="m-1 text-md-start" style={{ fontSize: "15px" }}>
                Get Social
              </p>
              <a href="https://facebook.com" className="text-light opacity-50">
                <FaFacebook className="mx-2 fs-5" />
              </a>
              <a href="https://twitter.com" className="text-light opacity-50">
                <FaTwitter className="mx-2 fs-5" />
              </a>
              <a href="https://instagram.com" className="text-light opacity-50">
                <FaInstagram className="mx-2 fs-5" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterNav;
