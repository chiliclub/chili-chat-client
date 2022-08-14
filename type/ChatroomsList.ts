export type ChatroomsListType = {
  insDatetime: string;
  updDatetime: string;
  title: string;
  adminUserNo: string;
  adminUserNickname: string;
  totalParticipantCount: number;
  chatRoomNo: number;
};

export type NewChatroomType = Pick<ChatroomsListType, "title">;
