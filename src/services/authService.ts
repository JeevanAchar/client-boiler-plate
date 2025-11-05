// Example auth service using a hypothetical API module

import { api } from "./api";

export const login = (data: { email: string; password: string }) => api.post("/auth/login", data);

export const register = (data: { email: string; password: string }) =>
  api.post("/auth/register", data);

export const getProfile = () => api.get("/auth/profile");
