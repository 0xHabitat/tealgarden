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

// FeatureBlock wrapper style
const ListItemWrapper = styled.div`
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
const Icon = styled.image`
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

// Process title
const ProcessTitle = styled.h1`
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

//Process description
const ProcessDescription = styled.p`
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

export { IconWrapper, ContentWrapper, Icon, ProcessTitle, ProcessDescription };
export default ListItemWrapper;
