import styled, { css } from "styled-components";

//条件付きのスタイルブロック
const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;
  &:hover {
    background-color: #357ae8;
  }
`;

// スタイルを決めるファンクション
const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

//スタイル
export const CustomButtonContainer = styled.button`
  cursor: pointer;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;

  /* 最後の仕上げはファンクションで決まる */
  ${getButtonStyles}
`;
