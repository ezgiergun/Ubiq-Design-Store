import { Container, Row, Col } from "react-bootstrap";

function ShowCaseCards() {
  return (
    <Container className="d-flex justify-content-center py-5 ">
      <Row>
        <Col className="mb-4 text-center">
          <div className="box">
            <img
              src="data/product-images/chairs/2/type2-3.jpeg"
              alt="chair-1"
              className="box-image rounded-1 mx-4"
              style={{ width: "270px", height: "300px" }}
            />
            <p className="box-name  box-space fs-4 mt-3">Swive it</p>
            <p className="box-price fw-bold">$10,000</p>
          </div>
        </Col>
        <Col className="mb-4 text-center">
          <div className="box">
            <img
              src="data/product-images/lamps/2/type2-2.jpeg"
              alt="lamp-1"
              className="box-image  mx-4 rounded-1"
              style={{
                width: "270px",
                height: "300px",
              }}
            />
            <p className="box-name box-space fs-4 mt-3">Distant Calling</p>
            <p className="box-price fw-bold">$1,520</p>
          </div>
        </Col>
        <Col className="text-center">
          <div className="box">
            <img
              src="data/product-images/tables/1/type1-4.jpeg"
              alt="table-1"
              className="box-image   mx-4 rounded-1"
              style={{ width: "270px", height: "300px" }}
            />
            <p className="box-name box-space mt-3 fs-4">Fluttward</p>
            <p className="box-price fw-bold"> $1,200</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ShowCaseCards;
