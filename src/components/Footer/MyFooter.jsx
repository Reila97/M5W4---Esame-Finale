import { Col, Container, Row } from "react-bootstrap";
import "./MyFooter.css";

function MyFooter() {
  return (
    <>
      <footer className="footer rounded-4 p-4 mt-5">
        <Container>
          <Row>
            <Col sm={6} className="text-center">
              <img
                src="../../../public/Logo.jpg"
                alt="logo"
                className="LogoImg rounded-circle"
              />
            </Col>

            <Col sm={6} className="text-center d-flex flex-column m-auto">
              
                <span className="m-2">Privacy Policy</span>
                <span className="m-2">Terms of Service</span>
                <span className="m-2">Contact Us</span>
              
            </Col>

            <p className="copyright">
              &copy; 2026 The Whispering Tomes. All rights reserved.
            </p>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default MyFooter;
