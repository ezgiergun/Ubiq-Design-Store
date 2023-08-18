import { useState, useEffect, useRef } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Row,
} from "react-bootstrap";
import { categories } from "../data/productsData.json";
import { NavLink } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);

  const allItems = categories.flatMap((category) => category.items);

  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const handleSearchClick = () => {
    setInputVisible(true);
    setSuggestionsVisible(true);
  };

  const handleInputBlur = () => {
    setInputVisible(false);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setSuggestionsVisible(true);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target)
      ) {
        setSuggestionsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Form className="d-flex mx-2">
        {isInputVisible ? (
          <FormControl
            ref={inputRef}
            type="search"
            placeholder="Type here to search"
            aria-label="Search"
            style={{ maxWidth: "170px", width: "170px" }}
            onBlur={handleInputBlur}
            autoFocus
            onChange={handleInputChange}
            value={query}
          />
        ) : (
          <Button
            className="bg-transparent border-0 p-1"
            onClick={handleSearchClick}
            style={{ width: "40px", height: "40px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </Button>
        )}
      </Form>
      {query && filteredItems.length > 0 && suggestionsVisible && (
        <Container
          fluid
          className="position-absolute bg-white border border-bottom-3 px-5"
          style={{ top: "100%", left: 0, zIndex: 100 }}
          ref={suggestionsRef}
        >
          <h4 className="text-center m-5 fs-5">Product Suggestions</h4>
          <Row className="justify-content-center m-5 p-5 text-center">
            {filteredItems.map((item) => (
              <Col key={item.id} md={3}>
                <Card style={{ border: "none" }} className="mb-4">
                  <Nav.Link as={NavLink} to={`/products/${item.name}`}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      style={{
                        maxHeight: "150px",
                      }}
                      className="rounded-1"
                    />
                  </Nav.Link>
                  <Card.Body className="align-items-center">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <div className="text-center">
                      <Nav.Link
                        as={NavLink}
                        to={`/products/${item.name}`}
                        className="mx-3 "
                        style={{ position: "absolute" }}
                      >
                        <Button size="sm" variant="light" className="">
                          DISCOVER
                        </Button>
                      </Nav.Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}

export default SearchBar;
