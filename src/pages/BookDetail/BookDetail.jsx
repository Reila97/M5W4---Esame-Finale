import { useEffect, useState } from "react";
import { useParams } from "react-router";
import books from "../../data/fantasy.json";
import CommentArea from "../../components/CommentArea/CommentArea.jsx";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./BookDetail.css"

function BookDetail() {
  const { asin } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    const selectedBook = books.find((book) => {
      return asin === book.asin;
    });
    setBook(selectedBook);
    console.log(selectedBook);
  }, [asin]);

  return (
    <>
      {book && (
        <Container>
          <Card className="DetailCard">
            <Row>
              <Col sm={6}> 
              <Card.Img 
              variant="top" 
              src={book.img}
              className="BookCover" />  
              </Col>

             <Col sm={6}>  
               <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text className="price">{book.price}€</Card.Text>
              </Card.Body>
              </Col>

              <CommentArea asin={book.asin} />

            </Row>
          </Card>
        </Container>
      )}
    </>
  );
}

export default BookDetail;
