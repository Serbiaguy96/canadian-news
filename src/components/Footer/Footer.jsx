/** @jsxImportSource @emotion/react */

import * as S from "./styles";

const Footer = () => {
  return (
    <div css={S.footerWrapper}>
      <div css={S.footerContainer}>
        <div css={S.sectionStyles}>
          <div css={S.sectionHeadingCss}>World</div>
          <div css={S.subsectionStyles}>
            <span>Africa</span>
            <span>America</span>
            <span>Asia</span>
            <span>Australia</span>
            <span>China</span>
            <span>Europe</span>
            <span>Middle East</span>
            <span>UK</span>
            <span>US</span>
          </div>
        </div>
        <div css={S.sectionStyles}>
          <div css={S.sectionHeadingCss}>Tech</div>
          <div css={S.subsectionStyles}>
            <span>Innovate</span>
            <span>Gadget</span>
            <span>Internet</span>
            <span>Hardware</span>
            <span>Software</span>
            <span>Star-ups</span>
            <span>Artificial Intelligence</span>
            <span>Automotive</span>
            <span>Mobile</span>
          </div>
        </div>
        <div css={S.sectionStyles}>
          <div css={S.sectionHeadingCss}>Business</div>
          <div css={S.subsectionStyles}>
            <span>Markets</span>
            <span>Tech</span>
            <span>Media</span>
            <span>Retail</span>
            <span>Career</span>
            <span>Vide</span>
          </div>
        </div>
        <div css={S.sectionStyles}>
          <div css={S.sectionHeadingCss}>Sport</div>
          <div css={S.subsectionStyles}>
            <span>Football</span>
            <span>Basketball</span>
            <span>Tennis</span>
            <span>Golf</span>
            <span>Formula 1</span>
            <span>Rugby</span>
            <span>Baseball</span>
            <span>Horse racing</span>
            <span>Skiing</span>
            <span>Sailing</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;
