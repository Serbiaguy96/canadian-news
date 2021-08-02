import { css } from "@emotion/react";

export const footerWrapper = css`
  width: calc(100% - 40px);
  background-color: black;
  padding: 10px 20px;
  
  @media (min-width: 1025px) {
    padding: 50px 0;
    width: 100%;
  }
`;

export const footerContainer = css`
  width: calc(100% - 20px);
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  color: #bfbfbf;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 300;
  line-height: 30px;
  font-size: 17px !important;
  
  span {
    cursor: pointer;
  }
  
  span:hover {
    color: white;
  }
  
  span::after {
    content: "  -"
  }
  

  @media (min-width: 1025px) {
    width: 1024px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    
    span::after {
      content: "";
    }
  }
`;

export const sectionStyles = css`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1024px) {
    margin-bottom: 10px;
  }
`;

export const subsectionStyles = css`
  display: flex;
  flex-flow: row wrap;

  & > * {
    margin-right: 5px;
  }
  
  span:last-child {
    &:after {
      content: "";
    }
  }

  @media (min-width: 1025px) {
    flex-direction: column;

    & > * {
      margin-right: 0;
      margin-bottom: 5px;
    }
  }
`;

export const sectionHeadingCss = css`
  font-size: 28px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
`;
