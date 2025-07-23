import SingleBook from "./SingleBook"
import { Container, Row, Col } from "react-bootstrap"

const BookList = (props) => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        {props.bookArray.map((book) => {
          return (
            <Col xs={12} md={6} lg={4} key={book.asin} className="text-center">
              <SingleBook
                asin={book.asin}
                title={book.title}
                imgCover={book.img}
                price={book.price}
                category={book.category}
              />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default BookList
