import Login from "./components/login";
import Home from "./components/home";
import Dashboard from "./components/dashboard/";
import Edit from "./components/edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login title="Login Page" description="mini absensi web" />}
        />
        <Route
          path="/register"
          element={
            <Register title="Register Page" description="mini absensi web" />
          }
        />
        <Route
          path="/edit"
          element={
            <Edit title="Register Page" description="mini absensi web" />
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard title="Dashboard Page" />}
        />
        <Route path="/" element={<Home title="Page Not Found" />} />
        <Route path="*" element={<h1>Page Not Found Yaya</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
