import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import axios from "axios";

function Login({ title, description }) {
  const [NIP, setNIP] = useState("");
  const [password, setPassword] = useState("");
  const handleNIP = (inputNIP) => {
    console.log(inputNIP);
    setNIP(inputNIP);
  };
  const handlePassword = (inputPassword) => {
    console.log(inputPassword);
    setPassword(inputPassword);
  };

  const userLogin = () => {
    console.log("userlogin ready");
    console.log(`nip: ${NIP}`);
    console.log(`password: ${password}`);
  };
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
          <Form.Control
            type="number"
            placeholder="masukan nip anda"
            required
            onChange={(event) => {
              handleNIP(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="*******"
            required
            onChange={(event) => {
              handlePassword(event.target.value);
            }}
          />
        </Form.Group>
        <Button
          className="w-100 my-4"
          onClick={() => {
            userLogin();
          }}
        >
          Log In
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
