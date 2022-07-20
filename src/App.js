import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Routes/Login";
import Signup from "./Routes/Signup";
import { AuthProvider } from "./auth";
import Navbar from "./components/Navbar";
import Profile from "./Routes/Profile";
import RequireAuth from "./RequireAuth";
import Home from "./Routes/Home";

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}
