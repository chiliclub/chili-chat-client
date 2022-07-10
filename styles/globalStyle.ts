import { createGlobalStyle } from "styled-components";

export type ThemeType = {
  color: {
    purple: string;
    blue: string;
    gray: string;
    green: string;
    lightGreen: string;
    darkGray: string;
  };
  boxShadow: {
    normal: string;
    purple: string;
    blue: string;
  };
  disabledButton: string;
  errorText: string;
  buttonColor: string;
};

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  :focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  html {
    font-size: 1rem;
    -webkit-text-size-adjust: none;
    -ms-overflow-style: none;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;
    scrollbar-width: none;
  }
  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
  }
`;
