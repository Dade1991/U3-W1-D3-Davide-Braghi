import SingleBook from "./SingleBook"

const BookList = (props) => {
  return (
    <>
      {props.bookArray.map((book) => {
        return (
          <SingleBook
            asin={book.asin}
            title={book.title}
            imgCover={book.img}
            price={book.price}
            category={book.category}
          />
        )
      })}
    </>
  )
}

export default BookList
