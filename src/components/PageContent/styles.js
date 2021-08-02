import { css } from "@emotion/react";

export const contentContainerCss = css`
  & > img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

  p {
    color: #262626;
    font-size: 18px !important;
    font-weight: 300;
    line-height: 30px;
  }
  
  @media (max-width: 1024px) {
    margin: 0 20px;
  }
`;

export const contentHeader1Css = css`
  font-size: 28px;
  line-height: 1.1;
  font-weight: 300;
  font-family: CNN, Helvetica Neue, Helvetica, Arial, Utkal, sans-serif;

  @media (min-width: 1025px) {
    font-size: 62px;
  }
`;

export const newsInfoSection = css`
  color: #737373;
  display: flex;
  flex-direction: column;

  span:first-child {
    margin-bottom: 5px;
  }
`;

export const newInfoSectionFirstPart = css`
  font-weight: bold;

  a {
    color: #006598;
    text-decoration: none;
  }
`;

export const socialNetworksSection = css`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  align-items: center;

  & > * {
    margin-right: 7px;
  }

  img {
    width: auto;
    height: 50px;
    cursor: pointer;
  }
`;

export const twitterSizeCss = css`
  height: 40px !important;
`;

export const moreDotsContainer = css`
  background-color: #c00;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;

  & > * {
    color: white !important;
    font-size: 30px !important;
  }
`;

export const contentHeader3Css = css`
  font-weight: bold;
  font-size: 18px;
`;

export const innerHeadingCss = css`
  font-size: 36px;
  font-weight: 300;
  padding: 20px 0 10px 0;
  line-height: 40px !important;
  
  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const videoCss = css`
  width: 100%;
  height: auto;
  margin-bottom: 30px;
`;

export const sucessBoxCss = css`
  background: #dff0d8;
  border: 1px solid #dfe0e4;
  padding: 15px;
  width: 100%;
  border-radius: 3px;
  font-size: 1.125rem;
  line-height: 2em;
  margin: 0 0 20px 0;
  color: #262626;
  font-weight: 300;
  
  @media (max-width: 1024px) {
    width: calc(100% - 40px);
  }
`;

export const tryItOutSpanCss = css`
  font-weight: bold;
  margin: 10px 0;

  a {
    color: #006598;
    cursor: pointer;
    text-decoration: underline;
    margin-left: 5px;
    &:hover {
      text-decoration: none;
    }
  }
`;
