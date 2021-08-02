/** @jsxImportSource @emotion/react */
import React from "react";
import { WEB_SITE_LINK } from "../PageContent/PageContent";

import * as S from "./styles";

const StepHeading = ({ step, linkText }) => {
  return (
    <div css={S.headingContainerCss}>
      Step {step}: <a href={WEB_SITE_LINK}>{linkText}</a>
    </div>
  );
};

export default StepHeading;
