import { createChatroom } from "@api/chatrooms";
import { Button, Error, Input, Overlay, Title } from "@styles/commonStyles";
import { ButtonContainer } from "pages/chatrooms";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";

type NewChatroomModalProps = {
  onClose: () => void;
};

const NewChatroomModal = ({ onClose }: NewChatroomModalProps) => {
  const [chatroomTitle, setChatroomTitle] = useState<string>("");
  const [isChatroomCreationErrorExists, setIsChatroomCreationErrorExists] =
    useState<boolean>(false);
  const changeChatroomTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatroomTitle(e.target.value);
  };
  const submitChatroomTitleHandler = async () => {
    try {
      await createChatroom(chatroomTitle as string);
      alert("생성이 완료되었습니다.");
      onClose();
    } catch (error) {
      setIsChatroomCreationErrorExists(true);
    }
  };

  return (
    <Overlay onClick={onClose}>
      <Contents onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>채팅방 생성</Title>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>
        <hr />
        <Body>
          <Title>제목</Title>
          <Input value={chatroomTitle} onChange={changeChatroomTitle} />
          {isChatroomCreationErrorExists && (
            <Error>채팅방이 생성되지 않았습니다. 다시 시도해주세요.</Error>
          )}
        </Body>
        <ButtonContainer>
          <Button onClick={submitChatroomTitleHandler}>생성하기</Button>
          <Button onClick={onClose}>닫기</Button>
        </ButtonContainer>
      </Contents>
    </Overlay>
  );
};

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Contents = styled.section`
  padding: 1rem 2rem;
  background: white;
  width: 50%;
  height: 50%;
`;

const Body = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  font-size: 2rem;
`;

export default NewChatroomModal;
