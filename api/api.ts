import { getCookie } from "@utils/cookies";
import axios from "axios";

export enum pathList {
  ChatRoom = "chat-rooms",
  Profile = "profile",
  MyProfile = "my",
  Signin = "signin",
  Signup = "signup",
}

export const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});

export const AuthClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${getCookie("user")}`,
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
