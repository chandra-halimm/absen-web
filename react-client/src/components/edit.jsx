import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const Edit = () => {
  useEffect(() => {
    if (!localStorage.getItem("nip") && !localStorage.getItem("nama")) {
      window.location.replace("./login");
    }
  });

  const [nama, setNama] = useState(localStorage.getItem("nama") || "");
  const [passwordBaru, setpasswordBaru] = useState("");
  const [password, setPassword] = useState("");

  const handleNama = (inputNama) => {
    setNama(inputNama);
    console.log(inputNama);
  };
  const handlePasswordBaru = (inputPasswordBaru) => {
    setpasswordBaru(inputPasswordBaru);
    console.log(inputPasswordBaru);
  };

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword);
    console.log(inputPassword);
  };

  const updateProfile = () => {
    const requestingData = {
      nip: localStorage.getItem("nip"),
      passwordBaru: passwordBaru,
      password: password,
      nama: nama,
    };
    axios({
      method: "PUT",
      url: "http://localhost:3300/users",
      data: requestingData,
    })
      .then(() => {
        localStorage.clear();
        window.location.reload();
      })
      .catch(() => {
        alert("password anda salah");
      });
  };
  return (
    <Container>
      <h3 className="my-4">Edit Profile</h3>
      <Button
        className="my-4 text-white"
        variant="warning"
        onClick={() => {
          window.location.replace("./dashboard/");
        }}
      >
        Back to Dashboard
      </Button>
      <Form>
        <Form.Group>
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            defaultValue={nama}
            onChange={(event) => {
              handleNama(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password Baru</Form.Label>
          <Form.Control
            type="password"
            placeholder="*******"
            onChange={(event) => {
              handlePasswordBaru(event.target.value);
            }}
          />
        </Form.Group>
        <hr />
        <Form.Group>
          <Form.Label>Password Lama</Form.Label>
          <Form.Control
            type="password"
            placeholder="*******"
            onChange={(event) => {
              handlePassword(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Text className="text-muted">
          Silahkan masukan password lama anda
        </Form.Text>
      </Form>
      <Button className="my-4 me-4" onClick={() => updateProfile()}>
        Update Profile
      </Button>
    </Container>
  );
};

export default Edit;
