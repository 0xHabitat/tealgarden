import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 50px 0px 0px 0;
  @media (max-width: 990px) {
    padding: 80px 0 40px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0 20px 0;
  }
`;

export const CardBG = styled.div`
  margin-left: -30px;
  padding: 10px;
  width: 100%;
  background: #ffffff;
  border: 2px solid #091632;
  box-sizing: border-box;
  box-shadow: 2px 2px 0px #091632;
  border-radius: 5px;
`;
