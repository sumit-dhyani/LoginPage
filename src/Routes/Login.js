import { useState } from "react";
import { useAuth } from "../auth";
import "../styles.css";
import { useLocation, useNavigate } from "react-router-dom";
export default function Login() {
  const [name, setname] = useState(null);
  const [errormessage, seterrormessage] = useState("");
  const [password, setpassword] = useState(null);
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const redirectpath = location.state?.path || "/";

  const handlelogin = async (e) => {
    e.preventDefault();
    let result = await auth.login(name, password);
    console.log(result);
    !result.error
      ? navigate(redirectpath, { replace: true })
      : seterrormessage(result.error);

    console.log("result", result);
  };
  return (
    <>
      <div className="container">
        <div className="col-sm-8 offset-sm-2 col-lg-6 offset-sm-3 col-xl-4 offset-xl-4 text-center">
          {/* <span style={{height:300}}></span> */}

          <form className="shadow rounded p-5 mt-5 bg-white">
            <h3 className="text-dark fw-bolder fs-4 mb-4">Sign In Page</h3>
            <div className="conatiner">
              <div className="col">{errormessage}</div>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setname(e.target.value)}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating ">
              <input
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button
              onClick={handlelogin}
              type="submit"
              className="btn btn-secondary w-100 submit_btn my-4"
            >
              Sign-In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
