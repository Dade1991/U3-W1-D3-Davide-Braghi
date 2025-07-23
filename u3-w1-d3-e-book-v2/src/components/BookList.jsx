import SingleBook from "./SingleBook"
import { Container, Row } from "react-bootstrap"

const BookList = (props) => {
  return (
    <>
      {props.bookArray.map((book) => {
        return (
          <Container>
            <Row className="justify-content-center mt-5">
              <SingleBook
                asin={book.asin}
                title={book.title}
                imgCover={book.img}
                price={book.price}
                category={book.category}
              />
            </Row>
          </Container>
        )
      })}
    </>
  )
}

export default BookList
