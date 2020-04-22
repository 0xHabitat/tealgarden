import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 50px 0px 80px 0;
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

export const Content = styled.button`
  text-align: left;
  border: 2px solid #e6ebf0;
  border-radius: 2px;
  padding: 20px;

  :hover {
    border: 2px solid #82e3e3;
  }
`;
