import "./SingleBook.css";
import { useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import CommentArea from "../../CommentArea/CommentArea.jsx";
import { useNavigate } from "react-router";

function SingleBook({ book, selected, handleSelected }) {
  const navigate = useNavigate();

  return (
    <Col key={book.asin} sm={12} md={6} lg={4} className="mb-4">
      <Card className="BookCard h-100 m-1 bg-light bg-opacity-75">
        <Card.Img
          variant="top"
          src={book.img}
          onClick={() => handleSelected(book)}
          style={{ height: "250px", objectFit: "cover", cursor: "pointer" }}
          className={
            selected === book.asin ? "border border-danger border-4" : ""
          }
        />

        <Card.Body className="d-flex flex-column">
          <Card.Title className="CardTitle">{book.title}</Card.Title>

          <Card.Text className="fw-bold text-muted">{book.price}€</Card.Text>

          <Button 
          variant="primary"
          className="CardBtn" 
          onClick={() => navigate(`/${book.asin}`)}>
            Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
