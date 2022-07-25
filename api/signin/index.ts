import { pathList, userClient } from "@api/api";
import { SigninInfoType } from "@type/User";

export const submitSigninInfo = async ({
  id,
  password,
}: SigninInfoType): Promise<SigninInfoType> => {
  const response = await userClient.post<SigninInfoType>(pathList.Signin, {
    id: id,
    password: password,
  });
  if (response.status !== 200) {
    throw new Error("failed to submit login info");
  }
  return response.data;
};
