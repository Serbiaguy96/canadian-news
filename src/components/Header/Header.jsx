/** @jsxImportSource @emotion/react */
import { Search, SpeakerNotes, Menu } from "@material-ui/icons";

import * as S from "./styles";

const Header = () => {
  return (
    <div css={S.headerContainerCss}>
      <div css={S.headerContentContainer}>
        <div css={S.logoContainer}>
          <SpeakerNotes css={S.iconNewsCss} />
        </div>
        <div css={S.headerContentCss}>
          <a href="/#" css={S.activeHref}>
            America > Canada
          </a>
          <a href="/#">Africa</a>
          <a href="/#">America</a>
          <a href="/#">Asia</a>
          <a href="/#">Australia</a>
          <a href="/#">Europe</a>
        </div>
        <div css={S.headerContentCss}>
          <a href="/#">International edition +</a>
          <Search css={S.iconHeaderCss} />
          <Menu css={S.iconHeaderCss} />
        </div>
      </div>
    </div>
  );
};

export default Header;
