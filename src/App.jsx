
import "./App.css";
import MyNav from "./components/Navbar/MyNav.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";
import AllTheBook from "./components/AllTheBook/AllTheBook.jsx";
import BookDetail from "./pages/BookDetail/BookDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import MyFooter from "./components/Footer/MyFooter.jsx";
import books from "./data/fantasy.json";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  const [filteredBooks, setFilteredBooks] = useState(books);

  return (
    <>
      <MyNav setFilteredBooks={setFilteredBooks} />
      

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Welcome /> 
                <AllTheBook filteredBooks={filteredBooks} />
              </>
            }
          />

          <Route path="/:asin" element={<BookDetail />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <MyFooter />
    </>
  );
}

export default App;
