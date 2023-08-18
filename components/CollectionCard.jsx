import { Card, Container, Button } from "react-bootstrap";
const CollectionCard = () => {
  return (
    <div className="text-center my-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 100 512 512"
        style={{ fill: "rgba(0, 0, 0, 0.5)" }}
      >
        <path d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />
      </svg>
      <h2 style={{ fontWeight: "200", fontSize: "18px" }}>Collection</h2>
      <Container className="d-flex justify-content-center mt-1 p-3">
        <Card className="mx-2 position-relative">
          <Card.Img
            src="data/product-images/chairs/1/type1-5.jpeg"
            style={{ width: "200px", height: "300px" }}
          />
          <div
            className="position-absolute bottom-0 w-100 text-center"
            style={{ fontWeight: "500", fontSize: "18px" }}
          >
            CHAIRS
          </div>
          <Button
            variant="light"
            className="position-absolute bottom-0 mx-5 invisible-button"
          >
            DISCOVER
          </Button>
        </Card>
        <Card className="mx-2 position-relative">
          <Card.Img
            src="data/product-images/lamps/3/type3-7.jpeg"
            style={{ width: "200px", height: "300px" }}
          />
          <div
            className="position-absolute bottom-0 w-100 text-center"
            style={{ fontWeight: "500", fontSize: "18px" }}
          >
            LAMPS
          </div>
          <Button
            variant="light"
            className="position-absolute bottom-0 mx-5 invisible-button"
          >
            DISCOVER
          </Button>
        </Card>
        <Card className="mx-2 position-relative">
          <Card.Img
            src="data/product-images/sofas/9/type9-5.jpeg"
            style={{ width: "200px", height: "300px" }}
          />
          <div
            className="position-absolute bottom-0 w-100 text-center"
            style={{ fontWeight: "500", fontSize: "18px" }}
          >
            SOFAS
          </div>
          <Button
            variant="light"
            className="position-absolute bottom-0 mx-5 invisible-button"
          >
            DISCOVER
          </Button>
        </Card>
        <Card className="mx-2 position-relative">
          <Card.Img
            src="data/product-images/tables/5/type5-2.jpeg"
            style={{ width: "200px", height: "300px" }}
          />
          <div
            className="position-absolute bottom-0 w-100 text-center"
            style={{ fontWeight: "500", fontSize: "18px" }}
          >
            TABLES
          </div>
          <Button
            variant="light"
            className="position-absolute bottom-0 mx-5 invisible-button"
          >
            DISCOVER
          </Button>
        </Card>
      </Container>
    </div>
  );
};

export default CollectionCard;
