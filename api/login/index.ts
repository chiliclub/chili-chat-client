import { client, pathList } from "@api/api";
import { LoginInfoType } from "@type/User";

const loginInfo = ({ id, password }: LoginInfoType): FormData => {
  const formData = new FormData();
  formData.append("id", id);
  formData.append("password", password);

  return formData;
};

export const submitLoginInfo = async ({
  data,
}: {
  data: LoginInfoType;
}): Promise<LoginInfoType> => {
  const response = await client.post<LoginInfoType>(
    pathList.Login,
    loginInfo(data)
  );

  if (response.status !== 200) {
    throw new Error("failed to submit login info");
  }
  return response.data;
};
