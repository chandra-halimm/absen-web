import ReactTypingEffect from "react-typing-effect";
import { Container, Form, Button } from "react-bootstrap";

function Login({ title, description }) {
  return (
    <Container>
      <div className="d-flex justify-content-center h3 my-4">
        <ReactTypingEffect
          text={[title, description]}
          speed={100}
          eraseDelay={800}
          eraseSpeed={100}
          typingDelay={100}
        />
      </div>
      <Form className="w-50 mx-auto">
        <Form.Group>
          <Form.Label className="fw-bold">NIP</Form.Label>
          <Form.Control type="number" placeholder="masukan nip anda" required />
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control type="password" placeholder="*******" required />
        </Form.Group>
        <Button className="w-100 my-4">Log In</Button>
      </Form>
    </Container>
  );
}

export default Login;
