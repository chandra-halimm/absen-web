import Login from "./components/login";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
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
