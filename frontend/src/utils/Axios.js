import axios from "axios";
// import store from "../store/store";

const baseUrl = import.meta.env.MODE === "development" ? import.meta.env.VITE_SERVER_URL : "/api/v1";

const axiosInstance = axios.create({
  baseURL         : baseUrl,
  // headers         : { authorization: `Bearer ${localStorage.getItem('token')}`},
  withCredentials : true
});

// Attach Bearer token dynamically from Redux state
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = store.getState().auth.token;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );


export default axiosInstance;