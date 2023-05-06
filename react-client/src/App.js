import Login from "./pages/login";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Edit from "./pages/edit";
import Register from "./pages/register";
import ErrorFound from "./pages/errornotfound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Route
          path="*"
          element={<ErrorFound>Page Not Found Yaya</ErrorFound>}
        />
      </Routes>
    </Router>
  );
}

export default App;
