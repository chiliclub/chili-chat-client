import { client, pathList } from "@api/api";
import { ChatroomsListType, NewChatroomType } from "@type/ChatroomsList";
import axios from "axios";

export const fetchChatroomsList = async (): Promise<
  Array<ChatroomsListType>
> => {
  const response = await client.get<Array<ChatroomsListType>>(
    pathList.ChatRoom
  );

  if (response.status !== 200) {
    throw new Error("failed to submit login info");
  }
  return response.data;
};

export const createChatroom = async (
  title: string
): Promise<NewChatroomType> => {
  const response = await axios.post<NewChatroomType>(pathList.ChatRoom, title);

  if (response.status !== 200) {
    alert("채팅방 생성에 실패했습니다");
  }
  return response.data;
};
