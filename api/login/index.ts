import { LoginInfoType } from "@type/User";
import axios from "axios";

const loginInfo = ({ id, password }: LoginInfoType): FormData => {
  const formData = new FormData();
  formData.append("id", id);
  formData.append("password", password);

  return formData;
};

export const submitLoginInfo = async (
  id: string,
  password: string
): Promise<LoginInfoType> => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/login/`,
    loginInfo({ id, password }),
    {
      withCredentials: true,
    }
  );

  if (response.status !== 200) {
    throw new Error("failed to submit login info");
  }
  return response.data;
};
