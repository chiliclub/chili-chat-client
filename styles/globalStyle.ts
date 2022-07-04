import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

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
};

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  :focus {
    outline: none;
    border: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  html {
    font-size: 1rem;
    -webkit-text-size-adjust: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
    &:disabled {
      cursor: default;
      fill: ${theme.disabledButton};
    }
  }
`;
