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

export const Tabs = styled.div`
  overflow: hidden;
  height: 3em;
  margin-top: 30px;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 20%;
  position: relative;

  font-size: 1em;
  font-weight: ${(props) => (props.active ? '700' : '500')};
  text-transform: ${(props) => (props.active ? 'uppercase' : '')};
  color: ${(props) => (props.active ? '#091632' : '#767676')};
  opacity: ${(props) => (props.active ? '100%' : '50%')};
  border-radius: 5px 5px 0px 0px;
  border: ${(props) =>
    props.active ? '2px solid #091632' : '2px solid #E1E4E8'};
  border-bottom: ${(props) => (props.active ? ' 1px solid #fff' : '')};
  background-color: ${(props) => (props.active ? 'white' : 'white')};
  height: ${(props) => (props.active ? '3em' : '3em;')};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
    border-color: #82e3e3;
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

export const ContentWrapperAccordion = styled.div`
  ${(props) => (props.active ? '' : 'display:none')};
  background-color: #fff;
  min-height: 150px !important;
  margin-top: 25px;
`;

export const ContentWrapperIntegration = styled.div`
  background-color: #fff;
  border: 2px solid #091632;
  box-shadow: 2px 2px 0px #091632;
  border-radius: 5px;
  padding: 20px;
  padding-top: 10px;
  margin-top: 30px;
  min-height: 150px !important;
  display: flex !important;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
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

export const StepNavigation = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  min-height: 100px;
  width: 25%;
  text-align: center;
  z-index: 5;
`;

export const StepNavigationElement = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  padding-top: 30px;
  padding-left: 15px;
  padding-bottom: 10px;
  font-size: 12px;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  z-index: 5;
`;

export const Content = styled.div`
  text-align: left;
  border: 2px solid #e6ebf0;
  border-radius: 2px;
  padding: 20px;
  color: #091632;
  font-size: 14px;
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
`;

export const ContentScrollSmall = styled.div`
  text-align: left;
  border: 2px solid #e6ebf0;
  border-radius: 2px;
  padding: 20px;
  color: #091632;
  font-size: 14px;
  width: 300px;
  max-height: 350px;
  overflow: scroll;

  .frame::-webkit-scrollbar {
    -webkit-appearance: none;
  }
`;

export const HorizontalDivider = styled.hr`
  color: #e6ebf0;
  opacity: 0.2;
`;

export const SetpsAccordion = styled.section`
  margin-top: 20px;
  overflow: hidden;
  @media (max-width: 990px) {
    padding: 40px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 20px 0 40px 0;
  }

  .reusecore__accordion {
    margin: 0 auto;
    width: 700px;

    .accordion__item {
      border: 2px solid #e6ebf0;
      border-radius: 5px;
      margin-bottom: 20px;

      .accordion__header {
        padding: 0px 20px;
      }

      .accordion__body {
        padding: 10px;
        margin: 0px 10px 10px;
        border: 2px solid #e1e4e8;
        border-radius: 5px;
      }
    }
    .accordion__item:active {
      border: 2px solid #82e3e3;
    }
    .accordion__item:hover {
      border: 2px solid #82e3e3;
    }
    .accordion__item:before {
      border: 2px solid #82e3e3;
    }
  }
`;
