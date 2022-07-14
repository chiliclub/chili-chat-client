export type User = {
  id: string;
  nickname: string;
  password: string;
  image?: string;
};

export type LoginInfoType = Omit<User, "nickname">;
