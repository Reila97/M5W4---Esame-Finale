import SingleBook from "./SingleBook/SingleBook.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import CommentArea from "../CommentArea/CommentArea.jsx";
import "./AllTheBook.css"

function AllTheBook({ filteredBooks }) {
  const [selected, setSelected] = useState();

  const handleSelected = (book) => {
    setSelected(book.asin);
  };
  //

  return (
    <Container className="mt-3">
      <Row>
        <Col sm={8} className="BookColumn">
          <Row>
            {filteredBooks.map((mybook) => (
              <SingleBook
                key={mybook.asin}
                book={mybook}
                selected={selected}
                handleSelected={handleSelected}
              />
            ))}
          </Row>
        </Col>

        <Col sm={4}>{selected && <CommentArea asin={selected} />}
        </Col>
      </Row>
    </Container>
  );
}

export default AllTheBook;
