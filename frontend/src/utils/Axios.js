import axios from "axios";

const baseUrl = import.meta.env.MODE === "development" ? import.meta.env.VITE_SERVER_URL : "/api/v1";

const axiosInstance = axios.create({
  baseURL         : baseUrl,
  withCredentials : true
});

export default axiosInstance;