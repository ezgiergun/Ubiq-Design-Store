import { Container, Row, Col } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import CollectItemCard from "./CollectItemCard";
import productsData from "../data/productsData.json";

function CollectionPageLayout() {
  return (
    <Container>
      {productsData.categories.map((category, index) => (
        <div key={index} className="mb-4">
          <CategoryCard categoryName={category.category} />
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {category.items.map((item, itemIndex) => (
              <Col key={itemIndex}>
                <CollectItemCard
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.price}
                />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default CollectionPageLayout;
