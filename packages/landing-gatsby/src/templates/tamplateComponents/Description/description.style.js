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
} from 'styled-system';

export const SectionWrapper = styled.section`

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

export const SummaryWrapper = styled.section`
    padding: 20px 0px 0px 0;
    @media (max-width: 990px) {
        padding: 40px 0 40px 0;
    }
    @media (max-width: 575px) {
        padding: 30px 0 20px 0;
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

export const BenefitsWrapper = styled.section`
    padding: 20px 0px 0px 0;
    @media (max-width: 990px) {
        padding: 40px 0 40px 0;
    }
    @media (max-width: 575px) {
        padding: 30px 0 20px 0;
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
