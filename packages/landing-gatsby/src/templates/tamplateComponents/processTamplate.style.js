import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 50px 0px 50px 0;
  @media (max-width: 990px) {
    padding: 80px 0 40px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0 20px 0;
  }
`;

export const SectionWrapperSmall = styled.section`
  padding: 20px 0px 20px 0;
  @media (max-width: 990px) {
    padding: 80px 0 40px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0 20px 0;
  }
`;

export const FlexWrapper = styled.div`
  ${(props) => (props.active ? '' : 'display:none')};
  display: flex !important;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
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

export const ToolImg = styled.img`
  height: 35px;
  padding-right: 15px;
`;

export const ToolContent = styled.div`
  display: block;
`;

export const ContentHover = styled.div`
  text-align: left;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 2px solid #e6ebf0;
  border-radius: 2px;
  padding: 20px;
  color: #091632;
  font-size: 14px;

  :hover {
    border: 2px solid #82e3e3;
  }
`;

export const ContentHoverTools = styled.div`
  text-align: left;
  border: 2px solid #e6ebf0;
  border-radius: 2px;
  padding: 20px;
  color: #091632;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-right: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  width: 400px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;

  :hover {
    border: 2px solid #82e3e3;
  }
`;

export const YellowHighliter = styled.mark`
  background-color: #ffde00;
  display: inline-block;
  line-height: 0em;
  padding-bottom: 0.1em;
  border-radius: 15px;
`;

export const TealHighliter = styled.mark`
  background-color: ${(props) => (props.active ? '#82E3E3' : 'transparent')};
  display: ${(props) => (props.active ? 'inline-block' : 'display:none')};
  line-height: ${(props) => (props.active ? '0em' : 'display:none')};
  border-radius: ${(props) => (props.active ? '15px' : 'display:none')};
  margin-top: ${(props) => (props.active ? '15px;' : 'display:none')};
`;

export const HorizontalDivider = styled.hr`
  color: #e6ebf0;
  opacity: 0.2;
`;