import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
interface ChatBubbleProps {
  sender: "me" | "other";
}

interface ProfileInfoProps {
  hideProfile: boolean;
}

const ChatRoom = () => {
  const { id } = useParams<string>();
  const [inputText, setInputText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {};

  const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #262628;
    color: white;
    overflow-y: auto;
  `;

  const Header = styled.div`
    align-items: center;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #262628;
    opacity: 0.95;
    position: sticky;
    top: 0;
    z-index: 1;
  `;

  const BottomChat = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #262628;
    position: sticky;
    bottom: 0;
    margin-bottom: 65px;
    z-index: 1;
  `;

  const Content = styled.div`
    width: 100%;
    min-height: 500px;
    max-height: 500px;
    overflow-y: auto;
  `;

  const SelectMenu = styled.select`
    width: 150px;
    height: 40px;
    background-color: #38383a;
    color: white;
  `;

  const TextInput = styled.input`
    width: 100%;
    height: 30px;
    margin-right: 10px;
    background-color: #38383a;
    border-radius: 15px;
    border: none;
    margin-top: 5px;
    color: white;
  `;

  const ChatBubble = styled.div<ChatBubbleProps>`
    display: flex;
    flex-direction: column;
    max-width: 70%;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: ${(props) =>
      props.sender === "me" ? "#FEE500" : "#FFFFFF"};
    align-self: ${(props) =>
      props.sender === "me" ? "flex-end" : "flex-start"};
    align-items: center;
    color: ${(props) => (props.sender === "me" ? "#000000" : "#333333")};
  `;

  const ProfileInfo = styled.div<ProfileInfoProps>`
    display: ${(props) => (props.hideProfile ? "none" : "flex")};
    align-items: center;
    margin-bottom: 5px;
  `;

  const ProfilePicture = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  `;

  const SentTime = styled.div`
    font-size: 10px;
    align-self: flex-end;
    margin-bottom: 10px;
    color: #999999;
  `;

  const AddButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: #2c2c2e;
    color: #999999;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  `;
  const chatData = {
    chatId: "123456789",
    messages: [
      {
        sender: "user",
        content: "<p>Hello, how are you?</p>",
        timestamp: "2024-04-18T08:30:00Z",
      },
      {
        sender: "friend",
        content: `좋은 고기를 태우지 않고 먹을 수 없을까? 고기를 먹을 때 옷에 냄새가 안 밸 수 없을까? 이렇게 시작된 광석씨네 이야기<a href='http://localhost:3000/downLoad' target="_blank" rel="noopener noreferrer">Click here</a><a style="display: inline-block; padding: 10px 20px; background-color: #f0f0f0; border: 1px solid #ccc; text-decoration: none; color: #333; border-radius: 5px;" href='https://www.google.co.kr/?hl=ko' target="_blank">코엑스점</a ><a style="display: inline-block; padding: 10px 20px; background-color: #f0f0f0; border: 1px solid #ccc; text-decoration: none; color: #333; border-radius: 5px;" href='https://www.google.co.kr/?hl=ko' target="_blank">D타워점</a >`,
        timestamp: "2024-04-18T08:31:00Z",
      },
      {
        sender: "user",
        content: "메뉴 보여주세요",
        timestamp: "2024-04-18T08:32:00Z",
      },
    ],
    participants: [
      {
        userId: "user123",
        username: "User1",
        profileImageUrl: "https://example.com/user1.jpg",
      },
      {
        userId: "friend456",
        username: "(광고)광화문석갈비",
        profileImageUrl: "https://example.com/friend2.jpg",
      },
    ],
  };
  const formatTime = (timestamp: string): string => {
    const messageTime = new Date(timestamp);
    const currentTime = new Date();

    const timeDifference = Math.floor(
      (currentTime.getTime() - messageTime.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (timeDifference === 0) {
      const hours = messageTime.getHours().toString().padStart(2, "0");
      const minutes = messageTime.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    } else if (timeDifference === 1) {
      return "1일 전";
    } else {
      return `${timeDifference}일 전`;
    }
  };
  return (
    <Wrapper>
      <Content>
        <Header>
          <IoIosArrowBack style={{ paddingLeft: "10px", color: "white" }} />
          <div
            style={{
              flex: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <span>title</span>
            <span style={{ color: "gray" }}>010-9183-3948</span>
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px",
              gap: "5px",
              color: "white",
            }}
          >
            <CiSearch />
            <GiHamburgerMenu />
          </div>
        </Header>
        {chatData.messages.map((message, index) => (
          <div key={index}>
            {message.sender === "user" ? (
              <ProfileInfo hideProfile={true}>
                <ProfilePicture
                  src={chatData.participants[0].profileImageUrl}
                  alt="Profile"
                />
                <div>{chatData.participants[0].username}</div>
              </ProfileInfo>
            ) : (
              <div style={{ paddingLeft: "20px" }}>
                {message.sender === "friend" && (
                  <ProfileInfo hideProfile={false}>
                    <ProfilePicture
                      src={chatData.participants[1].profileImageUrl}
                      alt="Profile"
                    />
                    <div>{chatData.participants[1].username}</div>
                  </ProfileInfo>
                )}
                <div
                  style={{ display: "flex", paddingLeft: "10px", gap: "5px" }}
                >
                  <ChatBubble sender="other">
                    {" "}
                    <div
                      dangerouslySetInnerHTML={{ __html: message.content }}
                    />
                  </ChatBubble>
                  <SentTime>{formatTime(message.timestamp)}</SentTime>
                </div>
              </div>
            )}

            {message.sender === "user" && (
              <div
                style={{
                  display: "flex",
                  paddingRight: "20px",
                  gap: "5px",
                  justifyContent: "flex-end",
                }}
              >
                <SentTime>{formatTime(message.timestamp)}</SentTime>
                <ChatBubble sender="me">
                  <div dangerouslySetInnerHTML={{ __html: message.content }} />
                </ChatBubble>
              </div>
            )}
          </div>
        ))}
      </Content>
      <BottomChat>
        <div
          style={{
            backgroundColor: "#2C2C2E",
            padding: "10px",
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
            border: " 1px solid #aaa",
          }}
        >
          <SelectMenu>
            <option value="option1">전체</option>
            <option value="option2">광고</option>
            <option value="option3">알림 메시지</option>
          </SelectMenu>
        </div>
        <div
          style={{
            display: "flex",

            backgroundColor: "#2C2C2E",
          }}
        >
          <AddButton onClick={handleSubmit}>
            <FaPlus />
          </AddButton>
          <TextInput
            type="text"
            placeholder="Type something..."
            value={inputText}
            onChange={handleChange}
          />
        </div>
      </BottomChat>
    </Wrapper>
  );
};

export default ChatRoom;
