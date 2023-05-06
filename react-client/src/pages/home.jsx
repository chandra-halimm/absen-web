import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import "../App.css";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Row className="mt-3">
        <Col className="d-flex justify-content-center align-items-center">
          <h3 className="mx-3">Aplikasi Absesnis Berbasis Web</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
