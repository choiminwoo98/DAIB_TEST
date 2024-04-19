import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import styled from "styled-components";
import { useEffect } from "react";

const SignIn = () => {
  const isLoggedIn = !!localStorage.getItem("userData");
  const navigate = useNavigate();
  const Button = styled.button`
    background-color: #f2f2f2;
    color: black;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  `;
  const LinkText = styled.span`
    &:hover {
      text-decoration: underline;
    }
    cursor: pointer;
    color: gray;
    font-size: 14px;
  `;
  const Wrapper = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justifycontent: center;
    align-items: center;
    flex-direction: column;
  `;
  const TextWrapper = styled.div`
    display: flex;
    justifycontent: center;
    align-items: center;
    flex-direction: column;
  `;
  const LoginForm = styled.form`
    width: 100%;
    padding: 20px;
  `;
  const ButtonWrapper = styled.div`
    display: flex;
    justifycontent: center;
    gap: 10px;
    flex-direction: column;
  `;

  const handleLogin = async () => {
    const mockData = {
      email: "example@example.com",
      password: "examplepassword",
      token: "mocktoken123",
    };
    // const res=await fetch.post("api/auth/signin",{
    //   ID:email,
    //   password:password
    // })
    // if (res.data.ok) {
    localStorage.setItem("userData", JSON.stringify(mockData));
    navigate("/");
    // }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Wrapper>
      <TextWrapper>
        <h3>Welcome to KakaoTalk</h3>
        <span style={{ textAlign: "center" }}>
          If you have a Kakao Account,
        </span>
        <span style={{ textAlign: "center" }}>
          log in with your email or phone number.
        </span>
      </TextWrapper>
      <LoginForm>
        <Input placeholder="Email or phone number" />
        <Input placeholder="Password" />
        <ButtonWrapper>
          <Button onClick={handleLogin}>Log In</Button>
          <Button>Sign Up</Button>
        </ButtonWrapper>
      </LoginForm>
      <LinkText>Find Kakao Account or Password</LinkText>
    </Wrapper>
  );
};

export default SignIn;
