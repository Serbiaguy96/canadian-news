/** @jsxImportSource @emotion/react */
import React from "react";
import Header from "../Header";

import * as S from "./styles";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <div css={S.mainContainerCss}>
      <Header />
      <div css={S.mainContentContainer}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
