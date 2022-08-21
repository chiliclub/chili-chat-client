import React, { Dispatch, SetStateAction } from "react";
import { message } from "./ChatContainer";
import { Button, Input } from "antd";
import { useRouter } from "next/router";

type ChatPresenterProps = {
  contents: Array<message>;
  message: string;
  username: string;
  setMessage: Dispatch<SetStateAction<string>>;
  setUsername: Dispatch<SetStateAction<string>>;
  handleEnter: ({ message, chatRoomNo }: message) => void;
};

const ChatPresenter = (props: ChatPresenterProps) => {
  const router = useRouter();
  const roomId = router.query.serialNumber as string;
  const { contents, message, username, setMessage, setUsername, handleEnter } =
    props;

  return (
    <>
      <div>
        유저이름:{" "}
        <Input
          style={{ flex: 1 }}
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
      </div>
      <div>
        {contents.map((message, idx: number) => (
          <div key={idx}>
            {message.username}: {message.contents}
          </div>
        ))}
      </div>
      <div>
        <Input.Search
          placeholder="input your messages..."
          value={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
          onSearch={(value) =>
            handleEnter({ message: value, chatRoomNo: roomId })
          }
          enterButton={"Enter"}
        />
      </div>
    </>
  );
};

export default ChatPresenter;
