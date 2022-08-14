import ChatContainer from "@components/Chat/ChatContainer";
import React from "react";

export type message = {
  username: string;
  content: string;
};

export const eachChatroom = () => {
  return <ChatContainer />;
};

export default eachChatroom;
