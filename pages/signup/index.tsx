import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import chiliEmoji from "@public/chili.svg";
import {
  Button,
  Input,
  Label,
  Title,
  Error,
  Wrapper,
  FormWrapper,
} from "@styles/commonStyles";
import { submitSignupInfo } from "@api/signup";
import { checkPassword } from "@utils/checkPassword";

const SignupPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [isIdValid, setIsIdValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(true);
  const [isIdErrorShown, setIsIdErrorShown] = useState<boolean>(false);
  const [isPasswordErrorShown, setIsPasswordErrorShown] =
    useState<boolean>(false);
  const [isNicknameErrorShown, setIsNicknameErrorShown] =
    useState<boolean>(false);

  const changeIdValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const changePasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const changeNicknameValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    setIsIdValid(id.length >= 5);
    setIsPasswordValid(checkPassword(password));
    setIsNicknameValid(nickname.length >= 2);
  }, [id, password, nickname]);

  const handleSubmit = async () => {
    if (isIdValid && isPasswordValid && isNicknameValid) {
      setIsIdErrorShown(false);
      setIsPasswordErrorShown(false);
      setIsNicknameErrorShown(false);
      try {
        const data = { id, nickname, password };
        await submitSignupInfo(data);
        alert("생성되었습니다!");
        router.push(`/signin`);
      } catch {
        // TODO: ID 중복 여부 검사, 부적절한 닉네임 여부 검사
      }
    } else {
      setIsIdErrorShown(!isIdValid);
      setIsPasswordErrorShown(!isPasswordValid);
      setIsNicknameErrorShown(!isNicknameValid);
    }
  };

  return (
    <>
      <Wrapper>
        <Title>회원가입</Title>
      </Wrapper>
      <Wrapper>
        <Image src={chiliEmoji} alt="chili" width={120} height={120} />
        <Title>Welcome!</Title>
      </Wrapper>
      <FormWrapper>
        <Label htmlFor="id">
          <span>ID:</span>
          <Input id="id" type="text" value={id} onChange={changeIdValue} />
        </Label>
        {isIdErrorShown && <Error>ID는 5글자 이상이어야 합니다.</Error>}
        <Label htmlFor="password">
          <span>PW:</span>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={changePasswordValue}
          />
        </Label>
        {isPasswordErrorShown && (
          <Error>
            비밀번호는 8글자 이상에 숫자와 문자 각각 1글자 이상 포함해야 합니다.
          </Error>
        )}
        <Label htmlFor="nickname">
          <span>NICKNAME: </span>
          <Input
            id="nickname"
            type="text"
            value={nickname}
            onChange={changeNicknameValue}
          />
        </Label>
        {isNicknameErrorShown && (
          <Error>닉네임은 2글자 이상이어야 합니다.</Error>
        )}
        <Button onClick={handleSubmit}>생성하기</Button>
      </FormWrapper>
    </>
  );
};

export default SignupPage;
