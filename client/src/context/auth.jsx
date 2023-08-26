import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  // use User data from localStorage
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const localData = JSON.parse(data);
      setAuth({
        ...localData,
        user: localData?.user || null,
        token: localData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
