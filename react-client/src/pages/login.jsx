import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import axios from "axios";

const Login = ({ title, description }) => {
  const [NIP, setNIP] = useState("");
  const [password, setPassword] = useState("");
  const handleNIP = (inputNIP) => {
    setNIP(inputNIP);
  };
  const handlePassword = (inputPassword) => {
    setPassword(inputPassword);
  };

  const userLogin = () => {
    //nip : 112233 password: 123
    const requestingData = {
      nip: NIP,
      password: password,
    };
    axios({
      method: "POST",
      url: "http://localhost:3300/users/login",
      data: requestingData,
    })
      .then((result) => {
        localStorage.setItem("nip", result.data.users.nip);
        localStorage.setItem("nama", result.data.users.nama);
        window.location.replace("/dashboard");
      })
      .catch(() => {
        alert("Password Salah");
      });
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
          className="w-100 mt-4 mb-3"
          onClick={() => {
            userLogin();
          }}
        >
          Log In
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
