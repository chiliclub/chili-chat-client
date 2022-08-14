export type ChatroomsListType = {
  insDatetime: string;
  updDatetime: string;
  title: string;
  adminUserNo: string;
  totalParticipantCount: number;
  chatRoomNo: number;
};

export type NewChatroomType = Pick<ChatroomsListType, "title">;
