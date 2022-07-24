import Image from "next/image";
import React, { useState } from "react";
import chiliEmoji from "@public/chili.svg";
import styled from "styled-components";
import { submitSigninInfo } from "@api/login";
import { useRouter } from "next/router";
import {
  Button,
  Input,
  Label,
  Title,
  Error,
  Wrapper,
  FormWrapper,
} from "@styles/commonStyles";
import Link from "next/link";

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
      await submitSigninInfo({ id, password });
      router.push(`/chatrooms`);
    } catch {
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
        <Link href={`/signup`}>
          <SignupLinkText>계정이 없으신가요?</SignupLinkText>
        </Link>
      </FormWrapper>
    </>
  );
};

const SignupLinkText = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export default LoginPage;
