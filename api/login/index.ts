import { pathList, userClient } from "@api/api";
import { SigninInfoType } from "@type/User";

const signinInfo = ({ id, password }: SigninInfoType): FormData => {
  const formData = new FormData();
  formData.append("id", id);
  formData.append("password", password);

  return formData;
};

export const submitSigninInfo = async (
  id: string,
  password: string
): Promise<SigninInfoType> => {
  const response = await userClient.post<SigninInfoType>(
    pathList.Signin,
    signinInfo({ id, password })
  );

  if (response.status !== 200) {
    throw new Error("failed to submit login info");
  }
  return response.data;
};
