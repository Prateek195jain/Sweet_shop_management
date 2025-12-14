import { useState } from "react";
import { AuthContext } from "./AuthContext";
import {jwtDecode} from "jwt-decode";

const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem("token");

  const [token, setToken] = useState(storedToken);
  const [role, setRole] = useState(
    storedToken ? jwtDecode(storedToken).role : null
  );

  const login = (jwt) => {
    const decoded = jwtDecode(jwt);

    localStorage.setItem("token", jwt);
    setToken(jwt);
    setRole(decoded.role);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
