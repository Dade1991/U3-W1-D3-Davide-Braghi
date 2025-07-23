import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import BookGenres from "../Json_file/scifi.json"
import SingleBook from "./components/SingleBook"

function App() {
  return (
    <>
      <SingleBook
        asin={BookGenres[0].asin}
        title={BookGenres[0].title}
        imgCover={BookGenres[0].img}
        price={BookGenres[0].price}
        category={BookGenres[0].category}
      />
    </>
  )
}

export default App
