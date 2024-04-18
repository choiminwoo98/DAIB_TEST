import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 16px;
`;

const Placeholder = styled.span`
  position: absolute;
  bottom: 10px; /* 밑줄과의 간격 조절 */
  left: 10px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.3); /* 투명한 색상 */
  pointer-events: none; /* 클릭 이벤트 방지 */
  transition: all 0.3s ease; /* 부드러운 전환 효과 */
`;

const Input = ({ placeholder, ...rest }: any) => {
  return (
    <InputContainer>
      <InputField {...rest} />
      <Placeholder>{placeholder}</Placeholder>
    </InputContainer>
  );
};

export default Input;
