import React from "react";
import styled from "styled-components";

const BadgeWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Badge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const NumberBadgeIcon = ({ count }: any) => {
  return <BadgeWrapper>{count > 0 && <Badge>{count}</Badge>}</BadgeWrapper>;
};

export default NumberBadgeIcon;
