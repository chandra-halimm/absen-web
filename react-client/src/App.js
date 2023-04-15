import Login from "./components/login";
import Main from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login title="Login Page" description="mini absensi web" />}
        />
        <Route path="/" element={<Main title="Page Not Found" />} />
      </Routes>
    </Router>
  );
}

export default App;
