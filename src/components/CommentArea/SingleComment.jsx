import { ListGroup } from "react-bootstrap"


function SingleComment({comment}) {
  return (
    <> 
      <ListGroup.Item>{comment.comment} {comment.rate}</ListGroup.Item>
    </>
  )
}

export default SingleComment
