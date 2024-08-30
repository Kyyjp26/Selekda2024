import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000/api",
});
axiosClient.interceptors.request.use((config) => {
  config.params = {
    token: localStorage.getItem("accessToken"),
  };
  return config;
});

export default axiosClient;
