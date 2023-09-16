import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


const UserContext = createContext([{ data: null, loading: true, error: null }, () => {}]);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    data: null,
    loading: true,
    error: null,
  });



  const fetchUser = async () => {
    const { data: response } = await axios.get("/me");

    if (response.data && response.data.user) {
      setUser({
        data: {
          id: response.data.user.id,
          email: response.data.user.email,
          stripeCustomerId: response.data.user.stripeCustomerId,
          name: response.data.user.name,
        },
        loading: false,
        error: null,
      });
    } else if (response.data && response.data.errors.length) {
      setUser({
        data: null,
        loading: false,
        error: response.errors[0].msg,
      });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
    }
    if (token) {
      fetchUser();
    } else {
      setUser({
        data: null,
        loading: false,
        error: null,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
