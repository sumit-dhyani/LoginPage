import { useAuth } from "../auth";

export default function Home() {
  const auth = useAuth();
  return (
    <>
      {auth.user ? (
        <div className="container">
          <div className="col-sm-8 offset-sm-2 col-lg-6 offset-sm-3 col-xl-4 offset-xl-4 text-center">
            <h3 className="mt-4">Welcome {auth.user.name.split(" ")[0]}</h3>
            <h5 className="mt-4"> This is your Home Screen </h5>
            <p className="mt-4">Your saved name is: {auth.user.name} </p>
            <h6 className="mt-4 mb-4">
              {" "}
              If you wish to change your full name and password you can switch
              to profile page{" "}
            </h6>
            <a className="text-muted text-decoration-none">
              {" "}
              `Note that the email can not be updated for that you will have to
              register again with correct email
            </a>
          </div>
        </div>
      ) : (
        <h4 className="fw-bolder mt-5 col-8 offset-2 text-center ">
          This is the Homepage Screen . Please Login to see more details
        </h4>
      )}
    </>
  );
}
