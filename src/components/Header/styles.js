import { css } from "@emotion/react";

export const headerContainerCss = css`
  width: 100%;
  background-color: #0c0c0c;
  border-top: 3px solid #c00;
  height: 50px;
`;

export const headerContentContainer = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 100%;
  margin: auto;

  @media (min-width: 1025px) {
    width: 1024px;
  }
`;

export const logoContainer = css`
  width: 60px;
  height: 57px;
  background: #c00;
  position: absolute;
  top: -1px;
  left: 0;
  border-color: #c00;
`;

export const iconNewsCss = css`
  color: white;
  margin: 5px 0 0 5px;
  height: 40px !important;
  width: 40px !important;
`;

export const activeHref = css`
  color: white;
  display: block !important;
`;

export const headerContentCss = css`
  font-size: 16px;
  color: #bfbfbf;
  margin-left: 70px;
  display: flex;
  align-items: center;
  
  & > * {
    margin: 0 10px;
    color: #bfbfbf;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
  
  
  @media (max-width: 1024px) {
    & > * {
      display: none;
    }
  }
`;

export const iconHeaderCss = css`
  height: 20px !important;
  width: 20px !important;
  cursor: pointer;
`;
