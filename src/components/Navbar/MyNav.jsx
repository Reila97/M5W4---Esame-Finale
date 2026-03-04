import "./MyNav.css";
import books from "../../data/fantasy.json";
import { Container, Button, Form, Navbar, Nav } from "react-bootstrap";

import NavDropdown from "react-bootstrap/NavDropdown";

function MyNav({ setFilteredBooks }) {
  const filter = (event) => {
    const bookArray = books.filter((book) =>
      book.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase().trim()),
    );
    setFilteredBooks(bookArray);
  };

  return (

      <Navbar expand="lg" className="Mynav bg-body-tertiary rounded-4 m-3 ">
        <Container fluid>
          <Navbar.Brand href="/:AllTheBook">
            <span className="logo">
              <span className="green">T</span>he
              <span className="green">W</span>hispering
              <span className="green">T</span>omes
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="flex-column flex-lg-row justify-content-center align-items-center w-100">
            <Nav
              className="flex-row justify-content-center my-3 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="mx-2" href="#home">Home</Nav.Link>
              <Nav.Link className="mx-2" href="#about">About</Nav.Link>
              <Nav.Link className="mx-2" href="#browse">Browse</Nav.Link>
            </Nav>

            <Form className="d-flex justify-content-center align-items-center w-100 w-lg-auto">
              <Form.Control 
              placeholder="Book's name" 
              onChange={filter}
              className="searchInput w-25 mx-2"/>
              <Button className="navBtn mx-2" variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default MyNav;
