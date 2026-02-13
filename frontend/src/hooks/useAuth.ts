import { useState } from "react";
import { API_URL } from "../utils/config";
import axios from "axios";

export function useAuth() {
  const [errorMessage, setErrorMessage] = useState("");
  // const [accessToken, setAccessToken] = useState<string | null>(
  //   localStorage.getItem("accessToken"),
  // );
  // const [refreshToken, setRefreshToken] = useState<string | null>(
  //   localStorage.getItem("refreshToken"),
  // );

  // const api = axios.create({ baseURL: API_URL });

  async function handleSignin({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const credentials = { email, password };

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

  function isValidPassword(password: string): string | null {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    return null;
  }

  async function handleSignup({
    name,
    email,
    address,
    password,
    confirmpassword,
  }: {
    name: string;
    email: string;
    address: string;
    password: string;
    confirmpassword: string;
  }) {
    const credentials = { name, email, address, password, confirmpassword };

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

    const passwordError = isValidPassword(password);
    if (passwordError) {
      setErrorMessage(passwordError);
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
