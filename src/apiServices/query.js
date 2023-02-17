import { API_URL } from "./apiConfig";
import { axiosInstance } from "./axios";

export async function getUserData() {
  const res = await axiosInstance.get(`${API_URL}/users`);
  return res.data;
}
