import { css } from "@emotion/react";

export const commentsContainer = css`
  width: 100%;
`;

export const commentsHeader = css`
  border-bottom: 1px solid #e9ebee;
  line-height: 25px;
  margin-bottom: 24px;
  padding: 8px 0;
  font-size: 14px;
  color: #1d2129;
  font-weight: bold;
`;

export const textAreaCss = css`
  outline: 0;
  padding: 12px 8px;
  min-height: 40px;
  border: 1px solid #d3d6db;
  box-sizing: border-box;
  vertical-align: top;
  width: 100%;
  resize: none;
  margin: 0 0 20px 0;
`;

export const commentRowCss = css`
  width: 100%;
  position: relative;
  padding: 0 0 10px 0;
  margin: 0 0 10px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const commentPhotoCss = css`
  padding: 0 20px 20px 0;
  position: absolute;

  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;

export const commentContent = css`
  padding: 0 0 0 60px;
`;

export const commentName = css`
  margin: 0 0 2px 0;
  color: #3b5998;
  font-size: 13px;
`;

export const commentText = css`
  font-size: 12px;
`;

export const commentStats = css`
  font-size: 12px;
  color: #90949c;
  margin: 4px 0 0 0;

  & > * {
    margin-right: 5px;
  }

  a {
    text-decoration: none;
    color: #4267b2;
  }

  a:hover {
    text-decoration: underline;
  }
`;
