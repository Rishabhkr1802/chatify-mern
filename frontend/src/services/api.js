import axiosInstance from "../utils/Axios.js";
import { endpoints } from "../utils/Constants.js";

export async function checkAuth() {
  const response = await axiosInstance.get(endpoints.me);
  return response;
}

export async function signupService(signupData) {
  const response = await axiosInstance.post(endpoints.signup, signupData);
  return response;
}

export async function loginService(loginData) {
  const response = await axiosInstance.post(endpoints.login, loginData);
  return response;
}

export async function logoutService() {
  const response = await axiosInstance.post(endpoints.logout);
  return response;
}

export async function getAllUserService() {
  const response = await axiosInstance.get(endpoints.getAllUser);
  return response;
}