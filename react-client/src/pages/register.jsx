import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import axios from "axios";

const Register = ({ title, description }) => {
  const [nip, setNIP] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

  const handleNIP = (inputNIP) => {
    setNIP(inputNIP);
  };
  const handleNama = (inputNama) => {
    setNama(inputNama);
  };
  const handlePassword = (inputPassword) => {
    setPassword(inputPassword);
  };

  const userRegister = () => {
    const requestingData = {
      nip: nip,
      nama: nama,
      password: password,
    };
    axios({
      method: "POST",
      url: "http://localhost:3300/users",
      data: requestingData,
    })
      .then((result) => {
        console.log(result.data);
        if (result.data.registered) {
          alert("Pendaftaran Berhasil");
          window.location.replace("/login");
        }
      })
      .catch(() => {
        alert("Gagal Mendaftar");
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
        <Button
          size="sm"
          className="mb-3 px-4"
          onClick={() => {
            window.location.replace("./");
          }}
        >
          Back
        </Button>
        <Form.Group>
          <Form.Label className="fw-bold">NIP</Form.Label>
          <Form.Control
            type="text"
            placeholder="masukan nip anda"
            required
            onChange={(event) => {
              handleNIP(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-bold">Nama</Form.Label>
          <Form.Control
            type="text"
            placeholder="*******"
            required
            onChange={(event) => {
              handleNama(event.target.value);
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
            userRegister();
          }}
        >
          Log In
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
