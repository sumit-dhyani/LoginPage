import axios from "axios";

const { createContext, useContext, useState } = require("react");

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const login = async (email, password) => {
    const url = "https://server-mongod.herokuapp.com/finduser";
    const requestOptions = { email: email };

    const response = await axios.post(url, requestOptions);
    console.log(response.data);

    if (response.data.email) {
      if (response.data.password === password) {
        setuser(response.data);
        return { error: false };
      } else {
        return { error: "THe username or password is not correct." };
      }
    } else {
      return { error: "Account not found in the database" };
    }
  };

  function updateuser(daat) {
    setuser(daat);
  }
  const logout = () => setuser(null);

  return (
    <AuthContext.Provider value={{ user, updateuser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
