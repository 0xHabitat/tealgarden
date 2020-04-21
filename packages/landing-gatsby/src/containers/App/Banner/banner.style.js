import styled from 'styled-components';
import Mail from 'common/src/assets/image/app/mail.svg';

export const ButtonWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 991px) and (min-width: 767px) {
    display: flex;
    .reusecore__button {
      padding-left: 0;
      padding-right: 0;
      &.withoutBg {
        margin-left: 25px;
        &:hover {
          background: transparent !important;
          box-shadow: none !important;
        }
      }
    }
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    .reusecore__button {
      width: 100%;
      &.withoutBg {
        border: 0;
      }
    }
  }
`;

export const EmailInputWrapper = styled.div`
  position: relative;
  width: 85%;
  @media (max-width: 768px) {
    width: 100%;
  }

  &::before {
    content: url(${Mail});
    display: block;
    position: relative;
    width: 22px;
    left: 22px;
    top: 48px;
    z-index: 9;
  }
  input {
    border-radius: 5px;
    background-color: #ffffff !important;
    border: 2px solid #e6ebf0 !important;
    margin-bottom: 30px;
    height: 60px;
    padding-left: 60px !important;
    color: #091632;
    opacity: 1;
    font-weight: 500;
    @media (max-width: 768px) {
    }
    &:focus {
      border: 2px solid #82e3e3 !important;
    }

    &:placeholder {
      font-size: 16px;
      color: #091632;
      opacity: 1;
    }
  }
  .input-icon {
    left: 10px !important;
    right: auto;
    top: 10px !important;
    height: 40px !important;
    svg {
      color: #e26c65;
      width: 24px;
      height: 30px;
    }
  }
`;
