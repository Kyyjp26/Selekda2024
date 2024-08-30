import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://zaky.dikelasawan.my.id:8443/api",
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
