import { Outlet } from "react-router-dom";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: teal;
`;
const MobileContainer = styled.div`
  width: 360px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Layout = () => {
  return (
    <CenteredContainer>
      <MobileContainer>
        <Outlet />
      </MobileContainer>
    </CenteredContainer>
  );
};

export default Layout;
