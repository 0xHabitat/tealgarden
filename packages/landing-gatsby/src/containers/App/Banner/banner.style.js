import styled from 'styled-components';
import Mail from 'common/src/assets/image/app/mail.svg';

export const DiscountWrapper = styled.div`
  text-align: left;
`;
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

export const Sun = styled.div`
  width: 350px;
	height: 350px;
  position: absolute;
  display: block;
  top: -34%;
  left: -11%;
  z-index: -1;
	background-color: #FFDE00;
	border-radius: 50%;
	box-shadow:
		0 0 0 20px #FFDE0080,
		0 0 0 40px #FFDE0040,
		0 0 0 60px #FFDE0020,
		0 0 0 80px #FFDE0010,
		0 0 0 100px #FFDE0000,
		0 0 40px 100px #FFDE0010;
	animation:
		sunrise 2s infinite linear forwards,
		rays 2s 2s infinite linear;

  @keyframes sunrise {
    0% {
      box-shadow: none;
    }
  }

  @keyframes rays {
    0% {
      box-shadow: 
      0 0 0 0 #FFDE0080,
      0 0 0 20px #FFDE0080,
      0 0 0 40px #FFDE0040,
      0 0 0 60px #FFDE0020,
      0 0 0 80px #FFDE0010,
      0 0 40px 100px #FFDE0010;
    }
    100% {
      box-shadow: 
      0 0 0 20px #FFDE0080,
      0 0 0 40px #FFDE0040,
      0 0 0 60px #FFDE0020,
      0 0 0 80px #FFDE0010,
      0 0 0 100px #FFDE0000,
      0 0 40px 100px #FFDE0010;
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
    background-color: #FFFFFF !important;
    border: 2px solid #E6EBF0 !important;
    margin-bottom: 30px;
    height: 60px;
    padding-left: 60px !important;
    color: #E26C65;
    opacity: 1;
    font-weight: 500;
    @media (max-width: 768px) {
    }
    &:focus {
      border: 2px solid #82E3E3 !important;
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
      color: #E26C65;
      width: 24px;
      height: 30px;
    }
  }
`;
