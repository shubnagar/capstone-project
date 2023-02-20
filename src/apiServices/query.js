import { API_URL } from "./apiConfig";
import { axiosInstance } from "./axios";

export async function getUserData() {
  const res = await axiosInstance.get(`${API_URL}/user`);
  return res.data;
}

export async function addUserData(data) {
  const res = await axiosInstance.post(`${API_URL}/user`, {
    data,
  });
  return res.data;
}
