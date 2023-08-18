import { Container, Col, Row, Button } from "react-bootstrap";

function RecentPost() {
  return (
    <Container className=" px-4 mt-5 container-sm">
      <Row className="text-center ">
        <Col md={6} className="">
          <img
            src="data/product-images/sofas/1/type1-6.jpeg"
            alt="Recent Post"
            className="img-fluid rounded-1"
            style={{ maxWidth: "370px" }}
          />
        </Col>
        <Col md={6}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 100 512 512"
            style={{ fill: "rgba(0, 0, 0, 0.5)" }}
          >
            <path d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />
          </svg>
          <p
            className="mb-md-5 mb-sm-2"
            style={{ fontWeight: "200", fontSize: "18px" }}
          >
            Recent Posts
          </p>
          <div className="p-md-5 p-sm-1 text-md-center">
            <p className="mb-1 mt-md-5 mt-sm-0 fs-6">
              In Love with Chic City Living
            </p>
            <p className="mb-1 fw-bold fs-2">California Modern</p>
            <div className="justify-content-center mt-md-5 d-flex">
              <Button variant="light">Discover</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RecentPost;
