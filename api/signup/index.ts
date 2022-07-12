import axios from "axios";
import { User } from "@type/User";

const signupInfo = ({ id, password, nickname }: User): FormData => {
  const formData = new FormData();
  formData.append("id", id);
  formData.append("password", password);
  formData.append("nickname", nickname);

  return formData;
};

export const submitSignupInfo = async (
  id: string,
  password: string,
  nickname: string
): Promise<User> => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/signup`,
    signupInfo({ id, password, nickname }),
    {
      withCredentials: true,
    }
  );

  if (response.status !== 200) {
    throw new Error("failted to submit signup info");
  }
  return response.data;
};
