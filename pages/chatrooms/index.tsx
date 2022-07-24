import { fetchChatroomsList } from "@api/chatrooms";
import NewChatroomModal from "@components/Chatrooms/NewChatroomModal";
import { Title, FormWrapper, Button } from "@styles/commonStyles";
import { ChatroomsListType } from "@type/ChatroomsList";
import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

const ChatRoomsPage = () => {
  const { data: chatroomsListData } = useQuery<Array<ChatroomsListType>>(
    ["chatroomsList"],
    () => fetchChatroomsList(),
    {
      initialData: [{}] as ChatroomsListType[],
    }
  );

  const [isNewChatroomModalOpen, setIsNewChatroomModalOpen] =
    useState<boolean>(false);

  return (
    <FormWrapper>
      {isNewChatroomModalOpen && (
        <NewChatroomModal onClose={() => setIsNewChatroomModalOpen(false)} />
      )}
      <Title>채팅방 목록</Title>
      <ChatroomListWrapper>
        {chatroomsListData?.map(
          (eachChatroom: ChatroomsListType, idx: number) => {
            return <div key={idx}>{eachChatroom.author}</div>;
          }
        )}
      </ChatroomListWrapper>
      <ButtonContainer>
        <Button onClick={() => setIsNewChatroomModalOpen(true)}>
          채팅방 만들기
        </Button>
        <Button>내 프로필 보기</Button>
      </ButtonContainer>
    </FormWrapper>
  );
};

const ChatroomListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export default ChatRoomsPage;
