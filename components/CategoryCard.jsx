import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

function CategoryCard({ categoryName }) {
  return (
    <Container className="text-center mt-4">
      <Row>
        <Col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 100 512 512"
            style={{ fill: "rgba(0, 0, 0, 0.5)" }}
          >
            <path d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />
          </svg>
        </Col>
      </Row>
      <Row>
        <Col>
          <p
            className="mb-md-5 mb-sm-2"
            style={{ fontWeight: "200", fontSize: "18px" }}
          >
            {categoryName}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryCard;

CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
};
