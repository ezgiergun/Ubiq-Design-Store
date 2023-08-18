import { Container, Row, Col, Form, Button } from "react-bootstrap";

const JoinCard = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className="text-md-left text-center fw-light mb-3">
          <h2 className="fw-light">Join Our Newsletter</h2>
          <p>
            Subscribe today for free delivery and save 10% on your first
            purchase.
          </p>
        </Col>
        <Col
          md={6}
          className="text-md-right justify-content center  p-4 text-center"
        >
          <Form inline>
            <Form.Group controlId="emailForm">
              <Form.Control
                type="email"
                placeholder="Your Email"
                className="custom-input"
                style={{ width: "80%" }}
              />
              <div className="px-5 d-flex flex-row-reverse">
                <Button variant="light">Subscribe</Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default JoinCard;
