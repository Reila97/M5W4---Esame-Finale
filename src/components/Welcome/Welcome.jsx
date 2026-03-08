import { useState } from "react";
import "./Welcome.css";

import { Alert, Button, Col, Container, Row } from "react-bootstrap";

function Welcome() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Alert show={show} className="welcomeAlert mt-5">
              <Alert.Heading>
                {" "}
                <span className="green">
                  Your daily escape, one chapter at a time.
                </span>
              </Alert.Heading>
              <p>
                Welcome to your new favorite corner.
                <br />
                At The Whispering Tomes, we curate more than just books - we
                create moments.
                <br /> Grab a coffee, find a cozy chair, and let the world fade
                away.
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button
                className="WelcomeBtn"
                  onClick={() => setShow(false)}
                  variant="outline-success"
                >
                  Close me
                </Button>
              </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Welcome;
