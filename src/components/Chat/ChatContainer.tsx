import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import ChatPresenter from "./ChatPresenter";

export type message = {
  username: string;
  content: string;
};

let sockJS = new SockJS(`${process.env.NEXT_PUBLIC_API_URL}/ws`);
let stompClient: Stomp.Client = Stomp.over(sockJS);

stompClient.debug = () => {};

const ChatContainer = () => {
  const router = useRouter();
  const roomId = router.query.serialNumber as string;
  const [contents, setContents] = useState<Array<message>>([]);
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe(`/${roomId}`, (data) => {
        const newMessage: message = JSON.parse(data.body) as message;
        addMessage(newMessage);
      });
    });
  }, [contents, roomId]);

  const handleEnter = ({ username, content }: message) => {
    const newMessage: message = { username, content };
    stompClient.send("/hello", {}, JSON.stringify(newMessage));
    setMessage("");
  };

  const addMessage = (message: message) => {
    setContents((prev) => [...prev, message]);
  };

  return (
    <section>
      <ChatPresenter
        contents={contents}
        handleEnter={handleEnter}
        message={message}
        setMessage={setMessage}
        username={username}
        setUsername={setUsername}
      />
    </section>
  );
};

export default ChatContainer;
