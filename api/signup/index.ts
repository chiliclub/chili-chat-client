import { User } from "@type/User";
import { userClient, pathList } from "@api/api";

const signupInfo = ({ id, password, nickname /*image*/ }: User): FormData => {
  const formData = new FormData();
  formData.append("id", id);
  formData.append("password", password);
  formData.append("nickname", nickname);
  // formData.append("image", image);

  return formData;
};

export const submitSignupInfo = async ({
  id,
  nickname,
  password,
}: User): Promise<User> => {
  const response = await userClient.post<User>(
    pathList.Signup,
    signupInfo({ id, nickname, password })
  );

  if (response.status !== 200) {
    throw new Error("failed to submit signup info");
  }
  return response.data;
};
