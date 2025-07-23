import { Card, Button } from "react-bootstrap"

const SingleBook = (props) => {
  return (
    <Card className="book-Card" asin={props.asin}>
      <Card.Img className="img-fluid" variant="top" src={props.imgCover} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="flex-grow-1"></Card.Text>
        <hr />
        <p>Book category: {props.category}</p>
        <Button className="custom-btn" variant="primary">
          {props.price} €
        </Button>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
