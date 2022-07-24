export type ChatroomsListType = {
  insDatetime: string;
  updDatetime: string;
  title: string;
  author: string;
  totalCount: number;
};

export type NewChatroomType = Omit<
  ChatroomsListType,
  "insDatetime" | "updDatetime" | "author" | "totalCount"
>;
