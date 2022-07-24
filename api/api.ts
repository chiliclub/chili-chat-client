import axios from "axios";

export enum pathList {
  ChatRoom = "chat-room",
  Profile = "profile",
  Login = "login",
  Signup = "signup",
}

export const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});

export const userClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/user`,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});
