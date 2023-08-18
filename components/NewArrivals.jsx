import { Container, Row, Col, Button } from "react-bootstrap";

function NewArrivals() {
  return (
    <Container className="p-5">
      <Row className="align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 100 512 512"
          style={{ fill: "rgba(0, 0, 0, 0.5)" }}
        >
          <path d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />
        </svg>
        <p
          className="text-center mb-5"
          style={{ fontWeight: "200", fontSize: "18px" }}
        >
          New Arrivals
        </p>
        <Col xs={12} md={6} className="mb-3 p-0 mx-md-auto">
          <div className="d-flex flex-column align-items-md-end">
            <h1 className="fw-bold text-center display-4">Curva</h1>
            <div className="my-md-5 text-center">
              <span className="fs-5 text-center mb-2">$2,000</span>
              <span
                className="mx-1"
                style={{ opacity: 0.75, textDecoration: "line-through" }}
              >
                $4,000
              </span>
            </div>
            <div className="text-center">
              <Button variant="light">DISCOVER</Button>
              <Button variant="dark" className="fs-5 my-5">
                Add to Cart
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-end">
          <img
            src="data/product-images/chairs/1/type1-2-removebg-cropped.png"
            alt=""
            className="img-fluid"
            style={{ alignSelf: "flex-end" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default NewArrivals;
