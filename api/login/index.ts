import { client, login } from "@api/endpoints";
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
    `${login}`,
    loginInfo(data)
  );

  if (response.status !== 200) {
    throw new Error("failed to submit login info");
  }
  return response.data;
};
