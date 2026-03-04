import "./AddComment.css";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function AddComment({ asin, fetchComments }) {
  const [formData, setFormData] = useState({
    comment: "",
    rate: "",
    elementId: asin,
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = async (event) => {
  event.preventDefault()

   try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTkzNWRiYzk4OWY0ZTAwMTUyYjExMWYiLCJpYXQiOjE3NzE2MTM4ODUsImV4cCI6MTc3MjgyMzQ4NX0.G3Epy56KzwrPfEgYCJAfeKdhTaQSA11k3Ucg7d7_mtc",

              "Content-Type":"application/json"
          },
          method: 'POST',
          body: JSON.stringify(formData)
        },
      );

      fetchComments()
    } catch (error) {
      console.log(error)
    }

 }

  return (
    <>
      <div className="add-comment-container mt-3 p-3 bg-light rounded-3 ">
        <h6
          className="mb-3 fw-bold text-secondary"
          style={{ fontSize: "0.9rem" }}
        >
          Write a review
        </h6>

        <Form onSubmit={handleSubmit}>
          <Row className="g-2">
            <Col md={12}>
              <Form.Group as={Col} md="12" controlId="comment">
                <Form.Label className="small fw-bold"> Your Comment</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={2}
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Write your comment..."
                />
              </Form.Group>
            </Col>

            <Col
              md={12}
              className="d-flex align-items-center justify-content-between mt-2"
            >
              <Form.Group
                className="d-flex flex-column align-items-center"
                controlId="rate"
              >
                <Form.Label className="me-2 mb-0 small fw-medium">
                  Rate:
                </Form.Label>

                <Form.Select
                  className="RateForm"
                  required
                  name="rate"
                  value={formData.rate}
                  onChange={handleChange}
                  size="sm"
                >
                  <option value="1">1 ★</option>
                  <option value="2">2 ★</option>
                  <option value="3">3 ★</option>
                  <option value="4">4 ★</option>
                  <option value="5">5 ★</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Button
            variant="dark"
            type="submit"
            size="sm"
            className="RateBtn px-3 fw-bold rounded-pill"
            onClick={handleSubmit}
          >
            send
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddComment;
