import "./CommentList.css";

import { Carousel } from "react-bootstrap";

function CommentList({ comments }) {
  if (comments.length === 0) {
    return <p className="text-muted small ps-2">No reviews yet</p>;
  }

  return (
    <>
      <Carousel>
        {comments.map((comment) => (
          <Carousel.Item key={comment._id}>
            <Carousel.Caption className="carosello" >

              <div className="mt-3">
                <h3 className="serif-font">{comment.rate} ★</h3>
                <p className="fst-italic">"{comment.comment}"</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default CommentList;
