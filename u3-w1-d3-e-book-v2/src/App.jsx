// import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import BookGenres from "../Json_file/scifi.json"
import BookList from "./components/BookList"

function App() {
  return (
    <>
      <BookList bookArray={BookGenres} />
    </>
  )
}

export default App
