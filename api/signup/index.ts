import { User } from "@type/User";
import { userClient, pathList } from "@api/api";

export const submitSignupInfo = async ({
  id,
  nickname,
  password,
}: User): Promise<User> => {
  const response = await userClient.post<User>(pathList.Signup, {
    id: id,
    nickname: nickname,
    password: password,
  });

  if (response.status !== 200) {
    throw new Error("failed to submit signup info");
  }
  return response.data;
};
