import { pathList, userClient } from "@api/api";
import { SigninInfoType, SigninResponseType } from "@type/User";

export const submitSigninInfo = async ({
  id,
  password,
}: SigninInfoType): Promise<SigninResponseType> => {
  const response = await userClient.post(pathList.Signin, {
    id: id,
    password: password,
  });
  if (response.status !== 200) {
    throw new Error("failed to submit login info");
  }
  return response.data;
};
