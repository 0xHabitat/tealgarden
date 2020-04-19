import styled from 'styled-components';

export const Divider = styled.div`
  position: relative;
  width: 100%;
  left: -16px;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 10px;
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
  .icon {
    background-color: transparent;
    color: #091632 !important;
    box-shadow: none !important;
    border: none;

    :hover {
      background-color: transparent !important;
      color: #82e3e3 !important;
      box-shadow: none !important;
      border: none;
    }
  }
  .menuIcons {
    .reusecore__button {
      .btn-icon {
        color: #091632;
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
