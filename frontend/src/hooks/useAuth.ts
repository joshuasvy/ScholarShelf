import { useState } from "react";
import { API_URL } from "../utils/config";
import axios from "axios";

export function useAuth() {
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSignin(credentials: {
    email: string;
    password: string;
  }) {
    const { email, password } = credentials;

    if (!email && !password) {
      setErrorMessage("Please enter your email and password.");
      return;
    }
    if (!email) {
      setErrorMessage("Please enter your email.");
      return;
    }
    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }
    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/auth/signin`, credentials);
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          setErrorMessage("Wrong password or email.");
        } else if (err.response?.status === 404) {
          setErrorMessage("Account doesn't exist");
        } else if (err.response?.status === 500) {
          setErrorMessage("Internal server error.");
        } else {
          setErrorMessage("Someting went wrong.");
        }
      } else {
        setErrorMessage("Unexpected error occured.");
      }
    }
  }

  async function handleSignup(credentials: {
    name: string;
    email: string;
    contact?: string;
    address: string;
    password: string;
    confirmpassword: string;
  }) {
    const { name, email, address, password, confirmpassword } = credentials;

    if (!name || !email || !address || !password || !confirmpassword) {
      setErrorMessage("Please fill all the fields.");
      return;
    }
    if (password !== confirmpassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/auth/signup`, credentials);
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409) {
          setErrorMessage("Email already exists.");
        } else {
          setErrorMessage("Unexpected error occured.");
        }
      } else {
        setErrorMessage("Something went wrong.");
      }
    }
  }

  return { handleSignin, handleSignup, errorMessage, setErrorMessage };
}
