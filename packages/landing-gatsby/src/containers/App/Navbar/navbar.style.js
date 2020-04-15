import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 750px;
  }
  @media (min-width: 992px) {
    max-width: 970px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
  .menuIcons {
    .reusecore__button {
      .btn-icon {
        color: #f4f4f1;
        font-size: 18px;
        width: auto;
        margin: 0;
        @media (max-width: 1100px) {
          color: #091632 !important;
        }
      }
    }
  }
  .hamburgMenu__bar {
    margin-left: 10px;
    span {
      background-color: #f4f4f1;
      @media (max-width: 1100px) {
        background-color: #091632 !important;
      }
    }
  }
`;

export { Container };
