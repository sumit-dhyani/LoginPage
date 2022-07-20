import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Signup() {
  const [name, setname] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const navigate = useNavigate();
  const handleregister = async (e) => {
    e.preventDefault();
    const url = "https://server-mongod.herokuapp.com/createuser";
    const requestOptions = { email: email, name: name, password: password };

    const response = await axios.post(url, requestOptions);
    console.log(response.data);
    alert("Registration Successfull, Taking you to login Page");
    navigate("/login");
    //   }
    // );
  };
  return (
    <>
      <div className="container">
        <div className="col-sm-8 offset-sm-2 col-lg-6 offset-sm-3 col-xl-4 offset-xl-4 text-center">
          {/* <span style={{height:300}}></span> */}
          <form className="shadow rounded p-5 mt-5 bg-white">
            <h3 className="text-dark fw-bolder fs-4 mb-4">Sign Up Page</h3>
            <div class="form-floating mb-3">
              <input
                onChange={(e) => setname(e.target.value)}
                type="text"
                class="form-control"
                id="floatingName"
                placeholder="Full Name"
              />
              <label for="floatingName">Full Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                onChange={(e) => setemail(e.target.value)}
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating ">
              <input
                type="password"
                onChange={(e) => setpassword(e.target.value)}
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <button
              onClick={handleregister}
              type="submit"
              class="btn btn-secondary w-100 submit_btn my-4"
            >
              Sign-Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
