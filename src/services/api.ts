import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  withCredentials: true, // allows cookies/sessions when needed
});

// Request Interceptor (Attach Authorization Token)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Error Handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // handle expiration / common errors
    if (error.response?.status === 401) {
      // e.g., redirect to login
      console.warn("Unauthorized! Redirecting to login...");
    }
    return Promise.reject(error);
  }
);
