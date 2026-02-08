import axios from "axios";
import { API_URL } from "../utils/config";

export async function loginUser(credentials: {
  email: string;
  password: string;
}) {
  const response = await axios.post(`${API_URL}/users/login`, credentials);
  return response.data;
}

export async function registerUser(credentials: {
  name: string;
  email: string;
  contact: string;
  address: string;
  password: string;
  confirmpassword: string;
}) {
  const response = await axios.post(`${API_URL}/users/signup`, credentials);
  return response.data;
}
