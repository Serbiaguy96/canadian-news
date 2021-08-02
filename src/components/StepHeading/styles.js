import { css } from "@emotion/react";

export const headingContainerCss = css`
  margin: 20px 0 10px 0;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.5em;
  color: #262626;
  
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
