import { Button } from "react-bootstrap";

const HeaderNavbar = () => {
  const userLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Welcome To Absensi Web</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2"></div>
          <Button
            className="mt-4"
            size="sm"
            variant="primary"
            onClick={() => {
              window.location.replace("../edit");
            }}
          >
            Edit Profile
          </Button>
          <Button
            onClick={() => userLogout()}
            className="mt-4 ms-4"
            size="sm"
            variant="danger"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
