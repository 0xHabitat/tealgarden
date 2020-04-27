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
  text-align: left;

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

export const YellowHighliter = styled.mark`
  background-color: #ffde00;
  display: inline-block;
  line-height: 0em;
  padding-bottom: 0.1em;
  border-radius: 15px;
  margin-bottom: 5px;
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
