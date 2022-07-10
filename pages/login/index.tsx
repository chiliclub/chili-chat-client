import Image from "next/image";
import React, { useEffect, useState } from "react";
import chiliEmoji from "@public/chili.svg";
import styled from "styled-components";
import { submitLoginInfo } from "@api/login";
import { useRouter } from "next/router";
import { theme } from "@styles/theme";

const LoginPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);

  const changeIdValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const changePasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await submitLoginInfo(id, password);
      router.push(`/chatrooms`);
    } catch (error) {
      console.error(`failed to submit because of ${error}`);
      setLoginError(true);
    }
  };

  return (
    <>
      <Wrapper>
        <Title>로그인</Title>
      </Wrapper>
      <Wrapper>
        <Image src={chiliEmoji} alt="chili" width={240} height={240} />
      </Wrapper>
      <FormWrapper>
        <Label htmlFor="id">
          <span>ID:</span>
          <Input id="id" type="text" value={id} onChange={changeIdValue} />
        </Label>
        <Label htmlFor="password">
          <span>PW:</span>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={changePasswordValue}
          />
        </Label>
        {loginError && <Error>아이디 또는 비밀번호 오류입니다.</Error>}
        <Button onClick={handleSubmit}>로그인</Button>
      </FormWrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const FormWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
`;

export const Error = styled.div`
  color: #e01e5a;
  margin: 0.5rem 0 1rem;
  font-weight: bold;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 2rem;
`;

export const Input = styled.input`
  border-radius: 0.25rem;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 0.75rem;
  height: 2.75rem;
  padding-top: 0.6875rem;
  padding-bottom: 0.8125rem;
  font-size: 1.125rem;
  line-height: 1.33333333;
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const Label = styled.label`
  margin-bottom: 1rem;
  & > span {
    display: block;
    text-align: left;
    padding-bottom: 0.5rem;
    font-size: 0.9375rem;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  margin-bottom: 0.75rem;
  width: 15%;
  max-width: 100%;
  color: #fff;
  background-color: ${theme.buttonColor};
  border: none;
  font-size: 1.125rem;
  font-weight: 900;
  height: 2.75rem;
  min-width: 6rem;
  padding: 0 1rem 0.1875rem;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.25rem;
  box-shadow: 0 1px 0.25rem rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(74, 21, 75, 0.9);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
  &:disabled {
    background-color: ${theme.disabledButton};
  }
`;

export default LoginPage;
