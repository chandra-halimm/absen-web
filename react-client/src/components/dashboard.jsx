import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const Dashboard = ({ title }) => {
  const [absensiList, setAbsensiList] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("nip") && !localStorage.getItem("name")) {
      window.location.replace("/login");
    }
    axios({
      method: "GET",
      url: "http://localhost:3300/absensi",
    }).then((result) => {
      setAbsensiList(result.data.absensi);
    });
  }, []);

  return (
    <Container>
      <main className="col-md-9 ms-sm-auto col-lg-12 px-md-4">
        <h1>{title}</h1>
        <p>Hello {localStorage.getItem("nama")}</p>
        <p>nip anda : {localStorage.getItem("nip")}</p>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">{localStorage.getItem("nama")}</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Share
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Export
              </button>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <span
                data-feather="calendar"
                className="align-text-bottom"
              ></span>
              This week
            </button>
          </div>
        </div>

        <h2>{title}</h2>
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
              {absensiList.map((absen, i) => {
                const { nip, status, createdAt } = absen;
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{nip}</td>
                    <td>{status}</td>
                    <td>{createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
