import { useEffect, useState } from "react";
import AddComment from "./AddComment/AddComment.jsx";
import CommentList from "./CommentList/CommentList.jsx";
import "./CommentArea.css";
import { Container, Spinner } from "react-bootstrap";

function CommentArea({ asin }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTkzNWRiYzk4OWY0ZTAwMTUyYjExMWYiLCJpYXQiOjE3NzE2MTM4ODUsImV4cCI6MTc3MjgyMzQ4NX0.G3Epy56KzwrPfEgYCJAfeKdhTaQSA11k3Ucg7d7_mtc",
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (asin) {
      fetchComments();
    }
  }, [asin]);

  return (
    <Container className="commentArea">
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="campfire-loader">
            <div className="fire-container">
              <div className="flame flame-main"></div>
              <div className="flame flame-left"></div>
              <div className="flame flame-right"></div>
            </div>

            <div className="logs">
              <div className="log"></div>
              <div className="log"></div>
            </div>

            <div className="embers">
              <div style={{ "--delay": "0s" }} className="ember"></div>
              <div style={{ "--delay": "0.3s" }} className="ember"></div>
              <div style={{ "--delay": "0.6s" }} className="ember"></div>
            </div>

            <div className="sparkles"></div>
          </div>
        </div>
      ) : isError ? (
        <h1>Errore nel caricamento dati</h1>
      ) : comments.length === 0 ? (
        <h2>Non ci sono risultati</h2>
      ) : (
        <>
          <AddComment asin={asin} fetchComments={fetchComments} />
          <CommentList comments={comments} />
        </>
      )}
    </Container>
  );
}

export default CommentArea;
