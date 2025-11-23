import axiosInstance from "../utils/Axios.js";
import { endpoints } from "../utils/Constants.js";

export async function checkAuth() {
  try {
    const response = await axiosInstance.get(endpoints.me);
    return response;
  } catch (error) {
    console.log("Error occur during checkAuth api service: ", error);
  }
}

export async function signupService(signupData) {
  try {
    const response = await axiosInstance.post(endpoints.signup,signupData);
    return response;
  } catch (error) {
    console.log("Error occur during signupService api service: ", error);
  }
}

export async function loginService(loginData) {
  try {
    const response = await axiosInstance.post(endpoints.login,loginData);
    return response;
  } catch (error) {
    console.log("Error occur during loginService api service: ", error);
  }
}

export async function logoutService() {
  try {
    const response = await axiosInstance.post(endpoints.logout);
    return response;
  } catch (error) {
    console.log("Error occur during logoutService api service: ", error);
  }
}