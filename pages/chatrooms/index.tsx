import { fetchChatroomsList } from "@api/chatrooms";
import NewChatroomModal from "@components/Chatrooms/NewChatroomModal";
import { Title, FormWrapper, Button } from "@styles/commonStyles";
import { ChatroomsListType } from "@type/ChatroomsList";
import { dateParse } from "@utils/dateParse";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

const ChatRoomsPage = () => {
  const router = useRouter();
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
      <ButtonContainer>
        <Button onClick={() => setIsNewChatroomModalOpen(true)}>
          채팅방 만들기
        </Button>
        <Button>내 프로필 보기</Button>
      </ButtonContainer>
      <ChatroomListWrapper>
        {chatroomsListData?.map(
          (eachChatroom: ChatroomsListType, idx: number) => {
            return (
              <Container
                key={eachChatroom.chatRoomNo}
                onClick={() =>
                  router.push(`/chatrooms/${eachChatroom.chatRoomNo}`)
                }
              >
                <MainSection>
                  <ChatRoomTitle>{eachChatroom.title}</ChatRoomTitle>
                  <AdminUser>
                    총 참여자수: {eachChatroom.totalParticipantCount}
                  </AdminUser>
                </MainSection>

                <SubSection>
                  {eachChatroom.updDatetime && (
                    <UpdDatetime>
                      최종 업데이트: {dateParse(eachChatroom.updDatetime)}
                    </UpdDatetime>
                  )}
                  <AdminUser>방장: {eachChatroom.adminUserNo}</AdminUser>
                </SubSection>
              </Container>
            );
          }
        )}
      </ChatroomListWrapper>
    </FormWrapper>
  );
};

const Container = styled.div`
  border: 1px solid black;
  width: 15rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatRoomTitle = styled.h1`
  width: 10rem;
`;

const MainSection = styled.section`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: flex-start;
`;

const SubSection = styled.section`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: flex-end;
`;

const UpdDatetime = styled.h5`
  margin: 0;
`;

const AdminUser = styled.h4`
  margin: 0;
`;

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
