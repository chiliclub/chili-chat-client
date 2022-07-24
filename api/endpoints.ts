import axios from "axios";

export const chatRoom = "chat-room";
export const profile = "profile";
export const login = "login";
export const signup = "signup";

export const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});
