import styled from 'styled-components';
import {
  color,
  width,
  height,
  display,
  space,
  borders,
  borderColor,
  boxShadow,
  borderRadius,
  flexWrap,
  alignItems,
  justifyContent,
  flexDirection,
  position,
  overflow,
  fontSize,
  textAlign,
} from 'styled-system';

export const SectionWrapper = styled.section`
  padding: 50px 0px 0px 0;
  @media (max-width: 990px) {
    padding: 80px 0 40px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0 20px 0;
  }
`;

export const ButtonWrapper = styled.button`
  background-color: none;
  border: none;
`;

export const ProcessLink = styled.a`
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CardBg = styled.div`
  margin-left: -30px;
  padding: 10px;
  width: 100%;
  min-height: 440px;
  background: #ffffff;
  border: 2px solid #091632;
  box-sizing: border-box;
  box-shadow: 2px 2px 0px #091632;
  border-radius: 5px;
`;

// FeatureBlock wrapper style
const ListItemWrapper = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .icon__wrapper {
        margin: 20px 10px 0px 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .content__wrapper {
        padding-left: 20px;

    }

  /* styled system prop support */
  ${display}
  ${width}
  ${height}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${color}
  ${space}
  ${borders}
  ${borderColor}
  ${boxShadow}
  ${borderRadius}
  ${overflow}
`;

// Icon wrapper style
const IconWrapper = styled.div`
  ${display}
  ${width}
  ${height}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${color}
  ${space}
  ${overflow}
  ${fontSize}
`;

// Content wrapper style
const ContentWrapper = styled.div`
  ${width}
  ${space}
  ${textAlign}
  ${display}
  ${width}
  ${height}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${color}
  ${space}
  ${overflow}
  ${fontSize}
`;

// Tool Icons
const Icon = styled.img`
  ${width}
  ${space}
  ${display}
  ${width}
  ${height}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${color}
  ${space}
`;

export { IconWrapper, ContentWrapper, Icon };
export default ListItemWrapper;
