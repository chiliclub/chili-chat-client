export const checkPassword = (inputText: string) => {
  // 최소 8글자 이상, 영어 1글자와 숫자 1글자 포함
  const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (inputText.match(validPassword)) {
    return true;
  } else return false;
};
