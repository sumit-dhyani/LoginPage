import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../auth";
import axios from "axios";
export default function Profile() {
  const auth = useAuth();
  // const [upd, setupd] = useState(true);
  const [name, setname] = useState(null);
  // const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  // const myRef = useRef(null);
  // const navigate = useNavigate();
  useEffect(() => {
    setname(auth.user.name);
    // setemail(auth.user.email)
    setpassword(auth.user.password);
  }, []);
  const update = async (e) => {
    e.preventDefault();
    const url = "https://server-mongod.herokuapp.com/update";
    const requestOptions = {
      email: auth.user.email,
      name: name,
      password: password
    };

    const response = await axios.put(url, requestOptions);
    console.log(response.data);
    // auth.updateuser({ name: name, email: auth.user.email, password: password });
    if (response.data.modifiedCount == 1 && response.data.matchedCount == 1) {
      auth.updateuser({
        name: name,
        email: auth.user.email,
        password: password
      });
      alert("Changes Saved Successfully");
      // console.log("runs");
      // myRef.current.value = "Changes are successfully updated";
    }
  };
  return (
    <>
      <div className="container">
        <div className="col-sm-8 offset-sm-2 col-lg-6 offset-sm-3 col-xl-4 offset-xl-4 text-center">
          {/* <span style={{height:300}}></span> */}
          <form className="shadow rounded p-5 mt-5 bg-white">
            <h3 className="text-dark fw-bolder fs-4 mb-4">
              Welcome {auth.user.name}
            </h3>

            <label value={auth.user.email}></label>

            <div className="form-floating mb-3">
              <input
                type="text"
                onChange={(e) => setname(e.target.value)}
                value={name || ""}
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating ">
              <input
                type="password"
                onChange={(e) => setpassword(e.target.value)}
                value={password || ""}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button
              onClick={update}
              type="submit"
              className="btn btn-secondary w-100 submit_btn my-4"
            >
              Update Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
