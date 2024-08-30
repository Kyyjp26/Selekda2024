import React, { createContext, useState, useContext } from "react";

const StageContext = createContext({
  currentUser: {},
  setCurrentUser: () => {},
  userToken: null,
  setToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, setUserToken] = useState(
    localStorage.getItem("accessToken")
  );

  const setToken = (token) => {
    if (token) {
      localStorage.setItem("accessToken", token);
    } else {
      localStorage.removeItem("accessToken");
    }
    setUserToken(token);
  };

  return (
    <StageContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userToken,
        setToken,
      }}
    >
      {children}
    </StageContext.Provider>
  );
};

export const useStageContext = () => useContext(StageContext);
