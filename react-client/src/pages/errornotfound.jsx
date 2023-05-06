import { Container, Row, Col, Button } from "react-bootstrap";
import imageNotFound from "../image/404.jpg";
import "../App.css";

const ErrorFound = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="text-center">
          <div>
            <img
              className="img-notfound-size"
              src={imageNotFound}
              alt="Page not found"
            />
            <h3>Page Not Found</h3>
            <Button
              onClick={() => {
                window.location.replace("./");
              }}
              className="mt-4 px-5"
              variant="danger"
            >
              Back
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorFound;
