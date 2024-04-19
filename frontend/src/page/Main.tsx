import styled from "styled-components";
import { CiSearch, CiMusicNote1 } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { SiKakaotalk } from "react-icons/si";
import { LuUser } from "react-icons/lu";
import { IoChatbubble } from "react-icons/io5";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { formatTime } from "../util";
import NumberBadgeIcon from "../components/NumberBadge";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const Header = styled.div`
    align-items: center;

    width: 100%;
    display: flex;
    padding-top: 10px;
    justify-content: space-between;
  `;
  const IconWrapper = styled.div`
    padding-right: 10px;
    display: flex;
    gap: 5px;
  `;
  const BottomMenu = styled.div`
    width: 100%;
    height: 50px;
    align-items: center;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f9f9fa;
    box-sizing: border-box;
  `;
  const ChatRoomList = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 400px;
    gap: 10px;
    padding: 0;
    margin: 0;
    padding-top: 10px;
  `;

  const ChatRoomItem = styled.li`
    padding-left: 10px;
    padding-right: 10px;
    gap: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #f0f0f0;
    }
  `;
  const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-right: 10px;
  `;

  const ChatInfo = styled.div`
    flex: 1;
    display: flex;
  `;
  const Icon = styled.div`
    position: relative;
    .logo {
      position: relative;
      background-color: #411c1c;
      font-size: 36px;
      color: #ffff00;
      border-radius: 30%;
    }
  `;

  const BottomIcon = styled.div`
    display: flex;

    .logo {
      position: relative;
      font-size: 28px;
      border-radius: 30%;
      cursor: pointer;
    }
  `;
  const chatList = {
    chatrooms: [
      {
        room_id: "1",
        room_name: "광화문석갈비",
        participants: ["홍길동", "김철수", "이영희"],
        last_message: {
          sender: "김철수",
          content: `좋은 고기를 태우지 않고 먹을 수 없을까? 고기를 먹을 때 옷에 냄새가 안 밸 수 없을까? 이렇게 시작된 광석씨네 이야기<a href='http://localhost:3000/downLoad' target="_blank" rel="noopener noreferrer">Click here</a><a style="display: inline-block; padding: 10px 20px; background-color: #f0f0f0; border: 1px solid #ccc; text-decoration: none; color: #333; border-radius: 5px;" href='https://www.google.co.kr/?hl=ko' target="_blank">코엑스점</a ><a style="display: inline-block; padding: 10px 20px; background-color: #f0f0f0; border: 1px solid #ccc; text-decoration: none; color: #333; border-radius: 5px;" href='https://www.google.co.kr/?hl=ko' target="_blank">D타워점</a >`,
          timestamp: "2024-04-19T10:30:00",
        },
      },
      {
        room_id: "2",
        room_name: "회사 업무방",
        participants: ["이사장", "부장님", "팀장"],
        last_message: {
          sender: "팀장",
          content: "이번 주 회의 일정은 변경되었습니다.",
          timestamp: "2024-04-18T15:20:00",
        },
      },
      {
        room_id: "3",
        room_name: "고등학교 동창회",
        participants: ["김영희", "박철수", "최지영"],
        last_message: {
          sender: "김영희",
          content: "다음 주 토요일에 만나요!",
          timestamp: "2024-04-15T09:45:00",
        },
      },
    ],
  };

  const handleItemClick = (id: any) => {
    navigate(`/chat/${id}`);
  };
  return (
    <Wrapper>
      <Header>
        <span style={{ paddingLeft: "10px" }}>Chats</span>
        <IconWrapper>
          <CiSearch />
          <IoIosAddCircleOutline />
          <CiMusicNote1 />
          <IoSettingsOutline />
        </IconWrapper>
      </Header>
      <ChatRoomList>
        {chatList.chatrooms.map((room) => (
          <ChatRoomItem
            key={room.room_id}
            onClick={() => handleItemClick(room.room_id)}
          >
            <Icon>
              <SiKakaotalk className="logo" />
            </Icon>
            <ChatInfo>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: "bold" }}>{room.room_name}</div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "lighter",
                    color: "gray",
                    overflow: "hidden",
                    height: "20px",
                  }}
                >
                  {room.last_message.content}
                </div>
              </div>
              <div>
                <div style={{ textAlign: "right", color: "gray" }}>
                  {formatTime(room.last_message.timestamp)}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingTop: "10px",
                    paddingRight: "5px",
                  }}
                >
                  <NumberBadgeIcon count={1} />
                </div>
              </div>
            </ChatInfo>
          </ChatRoomItem>
        ))}
      </ChatRoomList>
      <BottomMenu>
        <BottomIcon>
          <LuUser className="logo" />
        </BottomIcon>
        <BottomIcon>
          <IoChatbubble className="logo" />
        </BottomIcon>
        <BottomIcon>
          <CiSearch className="logo" />
        </BottomIcon>
        <BottomIcon>
          <PiDotsThreeOutlineLight className="logo" />
        </BottomIcon>
      </BottomMenu>
    </Wrapper>
  );
};

export default Main;
