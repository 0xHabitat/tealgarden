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
} from 'styled-system';

export const SectionWrapper = styled.section`
  padding: 50px 0px 80px 0;
  @media (max-width: 990px) {
    padding: 80px 0 40px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0 20px 0;
  }
`;

export const ContentWrapper = styled.div`
  ${(props) => (props.active ? '' : 'display:none')};
  background-color: #fff;
  border: 2px solid #091632;
  box-shadow: 2px 2px 0px #091632;
  border-radius: 5px;
  padding: 20px;
  padding-top: 10px;
  min-height: 150px !important;
`;

export const ContentHover = styled.div`
  text-align: left;
  border: 2px solid #e6ebf0;
  border-radius: 2px;
  padding: 20px;
  color: #091632;
  font-size: 14px;

  :hover {
    border: 2px solid #82e3e3;
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
  ${fontSize}
`;

export const Content = styled.div`
  text-align: left;
  border: 2px solid #e6ebf0;
  border-radius: 2px;
  padding: 20px;
  color: #091632;
  font-size: 14px;

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
  ${fontSize}
`;

export const ContentScroll = styled.div`
  text-align: left;
  border: 2px solid #e6ebf0;
  border-radius: 2px;
  padding: 20px;
  color: #091632;
  font-size: 14px;
  max-height: 350px;
  overflow: scroll;

  .frame::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  ${width}
`;
