import styled from "styled-components";
import { CiSearch, CiMusicNote1 } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { SiKakaotalk } from "react-icons/si";
import { LuUser } from "react-icons/lu";
import { IoChatbubble } from "react-icons/io5";
import { PiDotsThreeOutlineLight } from "react-icons/pi";

const Main = () => {
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
        <ChatRoomItem>
          <Icon>
            <SiKakaotalk className="logo" />
          </Icon>
          <ChatInfo>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "bold" }}>채팅방 이름</div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "lighter",
                  color: "gray",
                }}
              >
                설명
              </div>
            </div>
            <div>
              <div style={{ textAlign: "right" }}>21:20</div>
              <div>1</div>
            </div>
          </ChatInfo>
        </ChatRoomItem>{" "}
        <ChatRoomItem>
          <Icon>
            <SiKakaotalk className="logo" />
          </Icon>
          <ChatInfo>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "bold" }}>채팅방 이름</div>
              <div>설명</div>
            </div>
            <div>
              <div style={{ textAlign: "right" }}>21:20</div>
              <div>1</div>
            </div>
          </ChatInfo>
        </ChatRoomItem>
        <ChatRoomItem>
          <Icon>
            <SiKakaotalk className="logo" />
          </Icon>
          <ChatInfo>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "bold" }}>채팅방 이름</div>
              <div>설명</div>
            </div>
            <div>
              <div style={{ textAlign: "right" }}>21:20</div>
              <div>1</div>
            </div>
          </ChatInfo>
        </ChatRoomItem>
        <ChatRoomItem>
          <Icon>
            <SiKakaotalk className="logo" />
          </Icon>
          <ChatInfo>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "bold" }}>채팅방 이름</div>
              <div>설명</div>
            </div>
            <div>
              <div style={{ textAlign: "right" }}>21:20</div>
              <div>1</div>
            </div>
          </ChatInfo>
        </ChatRoomItem>
        <ChatRoomItem>
          <Icon>
            <SiKakaotalk className="logo" />
          </Icon>
          <ChatInfo>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "bold" }}>채팅방 이름</div>
              <div>설명</div>
            </div>
            <div>
              <div style={{ textAlign: "right" }}>21:20</div>
              <div>1</div>
            </div>
          </ChatInfo>
        </ChatRoomItem>
        <ChatRoomItem>
          <Icon>
            <SiKakaotalk className="logo" />
          </Icon>
          <ChatInfo>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "bold" }}>채팅방 이름</div>
              <div>설명</div>
            </div>
            <div>
              <div style={{ textAlign: "right" }}>21:20</div>
              <div>1</div>
            </div>
          </ChatInfo>
        </ChatRoomItem>
        <ChatRoomItem>
          <Icon>
            <SiKakaotalk className="logo" />
          </Icon>
          <ChatInfo>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "bold" }}>채팅방 이름</div>
              <div>설명</div>
            </div>
            <div>
              <div style={{ textAlign: "right" }}>21:20</div>
              <div>1</div>
            </div>
          </ChatInfo>
        </ChatRoomItem>
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
