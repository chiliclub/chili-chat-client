export type User = {
  id: string;
  nickname: string;
  password: string;
};

export type LoginInfoType = Omit<User, "nickname">;
