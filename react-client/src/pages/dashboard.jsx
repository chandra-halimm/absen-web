import { useEffect, useState } from "react";
import { Container, Badge, Row, Col } from "react-bootstrap";
import axios from "axios";
import Navbar from "../components/header-navbar";

const Dashboard = () => {
  const [absensiList, setAbsensiList] = useState([]);
  const [absenNotif, setAbsenNotif] = useState(false);
  const [lastCheckin, setLastCheckin] = useState(
    localStorage.getItem("lastCheckin") || ""
  );
  const [lastCheckOut, setLastCheckOut] = useState(
    localStorage.getItem("lastCheckOut") || ""
  );

  useEffect(() => {
    if (!localStorage.getItem("nip") && !localStorage.getItem("name")) {
      window.location.replace("/");
    }
    axios({
      method: "GET",
      url: "http://localhost:3300/absensi",
    }).then((result) => {
      setAbsensiList(result.data.absensi);
    });
  }, [absenNotif]);

  const attendanceCheckIn = (params) => {
    const today = new Date().toLocaleDateString();

    if (lastCheckin === today) {
      alert(`Anda sudah ${params} hari ini!`);
    } else {
      const requestingData = {
        nip: localStorage.getItem("nip"),
      };

      axios({
        method: "POST",
        url: `http://localhost:3300/absensi/${params}`,
        data: requestingData,
      })
        .then(() => {
          alert(`Berhasil melakukan ${params}!`);
          setLastCheckin(today);
          localStorage.setItem("lastCheckIn", today);
          setAbsenNotif(!absenNotif);
        })
        .catch(() => {
          alert(`Gagal melakukan ${params}!`);
        });
    }
  };
  const attendanceCheckOut = (params) => {
    if (lastCheckOut === today) {
      alert(`Anda sudah ${params} hari ini!`);
    } else {
      const requestingData = {
        nip: localStorage.getItem("nip"),
      };

      axios({
        method: "POST",
        url: `http://localhost:3300/absensi/${params}`,
        data: requestingData,
      })
        .then(() => {
          alert(`Berhasil melakukan ${params}!`);
          setLastCheckOut(today);
          localStorage.setItem("lastCheckOut", today);
          setAbsenNotif(!absenNotif);
        })
        .catch(() => {
          alert(`Gagal melakukan ${params}!`);
        });
    }
  };

  const date = new Date();
  const today = date.toLocaleDateString();
  const hours = `${date.getHours()} : ${date.getMinutes()}`;

  return (
    <Container>
      <main className="col-md-9 ms-sm-auto col-lg-12 px-md-4">
        <Navbar />
        <div className="">
          <Row>
            <Col></Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <p>Date And Time</p>
              <h3>{today}</h3>
            </Col>
            <Col className="mt-5">
              <h3>{hours}</h3>
            </Col>
            <hr />
          </Row>

          <Row className="mt-3">
            <Col>
              <p>Name :</p>
              <h3>{localStorage.getItem("nama")}</h3>
            </Col>
            <Col>
              <p>Nip :</p>
              <h3>{localStorage.getItem("nip")}</h3>
            </Col>
            <hr />
          </Row>

          <Row className="my-3">
            <Col>
              <h4>Status</h4>
            </Col>
          </Row>
        </div>

        <Badge
          pill
          bg="primary"
          className="me-4 py-2"
          style={{ cursor: "pointer" }}
          onClick={() => attendanceCheckIn("checkin")}
        >
          Checkin
        </Badge>
        <Badge
          size="lg"
          pill
          bg="danger"
          className="py-2"
          style={{ cursor: "pointer" }}
          onClick={() => attendanceCheckOut("checkout")}
        >
          Checkout
        </Badge>

        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">NIP</th>
                <th scope="col">Status</th>
                <th scope="col">Tanggal</th>
              </tr>
            </thead>

            <tbody>
              {absensiList.map((absensi, i) => {
                const { nip, status, createdAt } = absensi;
                const formatedDate = new Date(createdAt)
                  .toLocaleString()
                  .replace(",", "");
                const [date, time] = formatedDate.split(" ");
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{nip}</td>
                    <td>{status}</td>
                    <td>{`${date} ${time}`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div></div>
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
