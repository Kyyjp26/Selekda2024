import React, { createContext, useState, useContext } from "react";

const StageContext = createContext({
  currentUser: {},
  setCurrentUser: () => {},
  userToken: null,
  setToken: () => {},
  banners: [],
  setBanners: () => {},
  portofolios: [],
  setPortofolios: () => {},
  blogs: [],
  setBlogs: () => {},
});

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, setUserToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [banners, setBanners] = useState([]);
  const [portofolios, setPortofolios] = useState([]);
  const [blogs, setBlogs] = useState([]);

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
        banners,
        setBanners,
        portofolios,
        setPortofolios,
        blogs,
        setBlogs,
      }}
    >
      {children}
    </StageContext.Provider>
  );
};

export const useStageContext = () => useContext(StageContext);
