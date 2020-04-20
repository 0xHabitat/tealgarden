import styled from 'styled-components';

const NewsletterWrapper = styled.div`
  position: relative;
  background: #ffde00;
  padding: 44px 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0px 150px 0;
  @media (max-width: 1220px) {
    padding: 35px 40px;
  }
  @media (max-width: 575px) {
    padding: 35px 20px;
  }
  @media (max-width: 990px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 470px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1220px) {
    width: 420px;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }

  .email_input {
    flex-grow: 1;
    margin-right: 20px;

    @media (max-width: 575px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &.is-material {
      &.is-focus {
        label {
          font-size: 14px;
          color: #091632;
          font-weight: 700;
        }
        .highlight {
          background: #091632;
          height: 1px;
        }
      }
    }

    .highlight {
      background: rgba(255, 255, 255, 0.4);
    }

    input {
      background: transparent;
      font-size: 16px;
      font-weight: 400;
      color: #091632;
      padding: 10px 15px;
      border-color: #091632;
      @media (max-width: 575px) {
        height: 48px;
      }
    }

    label {
      font-size: 17px;
      color: #091632;
      font-weight: 400;
      padding-left: 10px;
      top: 5px;
      pointer-events: none;
    }
  }
`;

export default NewsletterWrapper;
