import { useState } from "react";
import { API_URL } from "../utils/config";
import axios from "axios";

export function useAuth() {
  const [errorMessage, setErrorMessage] = useState("");
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem("accessToken"),
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    localStorage.getItem("refreshToken"),
  );

  // Axios instance
  const api = axios.create({ baseURL: API_URL });

  // Attach access token to requests
  api.interceptors.request.use((config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  // Handle expired access tokens
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401 && refreshToken) {
        try {
          const res = await axios.post(`${API_URL}/auth/refresh`, {
            refreshToken,
          });

          const newAccessToken = res.data.accessToken;
          setAccessToken(newAccessToken);
          localStorage.setItem("accessToken", newAccessToken);

          // Retry original request
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return api.request(error.config);
        } catch (refreshError) {
          console.error("Refresh failed:", refreshError);
          logout();
        }
      }
      return Promise.reject(error);
    },
  );

  // Signin
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
      const { accessToken, refreshToken } = response.data;

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

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
          setErrorMessage("Something went wrong.");
        }
      } else {
        setErrorMessage("Unexpected error occurred.");
      }
    }
  }

  // Signup
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
          setErrorMessage("Unexpected error occurred.");
        }
      } else {
        setErrorMessage("Something went wrong.");
      }
    }
  }

  // Password validation
  function isValidPassword(password: string): string | null {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    return null;
  }

  // Logout
  function logout() {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  return {
    handleSignin,
    handleSignup,
    logout,
    api,
    errorMessage,
    setErrorMessage,
  };
}
