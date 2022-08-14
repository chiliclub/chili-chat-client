import React, { Dispatch, SetStateAction } from "react";
import { message } from "./ChatContainer";
import { Button, Input } from "antd";

type ChatPresenterProps = {
  contents: Array<message>;
  message: string;
  username: string;
  setMessage: Dispatch<SetStateAction<Array<message>>>;
  setUsername: Dispatch<SetStateAction<string>>;
  handleEnter: ({ username, content }: message) => void;
};

const ChatPresenter = (props: ChatPresenterProps) => {
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
            {message.username}: {message.content}
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
          onSearch={(value) => handleEnter({ username, value })}
          enterButton={"Enter"}
        />
      </div>
    </>
  );
};

export default ChatPresenter;
