import { Link } from "react-router-dom";
import { useAuth } from "../auth";
export default function Navbar() {
  const auth = useAuth();
  return (
    <nav className="navbar bg-dark  ">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <Link to="/" className="text-white text-decoration-none">
            Home
          </Link>
        </span>
        {!auth.user && (
          <span className="navbar-items">
            <Link className="text-white text-decoration-none" to="/register">
              Register
            </Link>
          </span>
        )}
        <span className="navbar-items">
          <Link className="text-white text-decoration-none" to="/profile">
            Profile
          </Link>
        </span>
        {!auth.user ? (
          <span className="navbar-items">
            <Link className="text-white text-decoration-none" to="/login">
              Login
            </Link>
          </span>
        ) : (
          <span onClick={auth.logout} className="navbar-items">
            <Link className="text-white text-decoration-none" to="/">
              Logout
            </Link>
          </span>
        )}
      </div>
    </nav>
  );
}
