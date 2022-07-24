import axios from "axios";
import { User } from "@type/User";
import { client, signup } from "@api/endpoints";

const signupInfo = ({ id, password, nickname /*image*/ }: User): FormData => {
  const formData = new FormData();
  formData.append("id", id);
  formData.append("password", password);
  formData.append("nickname", nickname);
  // formData.append("image", image);

  return formData;
};

export const submitSignupInfo = async ({
  data,
}: {
  data: User;
}): Promise<User> => {
  const response = await client.post(`${signup}`, signupInfo(data));

  if (response.status !== 200) {
    throw new Error("failed to submit signup info");
  }
  return response.data;
};
