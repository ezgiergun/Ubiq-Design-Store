import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const EndNav = () => {
  return (
    <Container className="">
      <Row className="mx-5 p-md-5 p-sm-1 ">
        <Col md={2} sm={4} xs={4}>
          <h3 className="fs-5 mb-md-3 mb-sm-2">Navigate</h3>
          <ul className="no-bullets ">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/sitemap">Sitemap</Link>
            </li>
          </ul>
        </Col>
        <Col md={2} xs={5} sm={4}>
          <h3 className="fs-5 mb-md-3 mb-sm-2">Categories</h3>
          <ul className="no-bullets">
            <li>
              <Link to="/new-arrivals">New Arrivals</Link>
            </li>
            <li>
              <Link to="/featured">Featured</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/popular-products">Popular Products</Link>
            </li>
          </ul>
        </Col>
        <Col md={2} xs={3} sm={4}>
          <h3 className="fs-5 mb-md-3 mb-sm-2">Collection</h3>
          <ul className="no-bullets">
            <li>
              <Link to="/tables">Tables</Link>
            </li>
            <li>
              <Link to="/lamps">Lamps</Link>
            </li>
            <li>
              <Link to="/chairs">Chairs</Link>
            </li>
            <li>
              <Link to="/sofas">Sofas</Link>
            </li>
          </ul>
        </Col>

        <Col md={6} sm={12} className="">
          <h3 className="fs-3 text-end mb-3">123 Main St, NY</h3>
          <p className="fs-6 text-end mb-3">hello@furnistore.com</p>
          <p className="fs-6 text-end mb-3"> +1-598-456-7890</p>
        </Col>
      </Row>
    </Container>
  );
};

export default EndNav;
