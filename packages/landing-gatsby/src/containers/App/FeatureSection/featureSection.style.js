import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  padding: 80px 0 100px;
  @media (max-width: 1440px) {
    padding: 40px 0 50px;
  }
  @media (max-width: 768px) {
    padding: 40px 0 0px;
  }
  @media (max-width: 500px) {
    padding: 30px 0;
  }

  .feature__block {
    position: relative;
    height: 100%;
    transition: box-shadow 0.3s ease;
    .icon__wrapper {
      position: relative;
      background: transperent;
      .flaticon-flask {
        &:before {
          margin-left: 8px;
        }
      }

      &:before {
        transform: rotate(45deg);
        background-color: rgba(255, 255, 255, 0.15);
      }
      &:after {
        transform: rotate(-45deg);
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }

  .row {
    > .col {
      &:nth-child(1) {
        .feature__block {
          .icon__wrapper {
            color: #091632;
            transition: all 0.6s ease;
          }
        }
        &:hover {
          .feature__block {
            .icon__wrapper {
              background: #FFF85A;
              color: #091632;
              border: 2px solid #091632;
              box-shadow: 2px 2px 0px #091632;
            }
          }
        }
      }
      &:nth-child(2) {
        .feature__block {
          .icon__wrapper {
            color: #82E3E3;
            transition: all 0.6s ease;
          }
        }
        &:hover {
          .feature__block {
            .icon__wrapper {
              background: #82E3E3;
              color: #091632;
              border: 2px solid #091632;
              box-shadow: 2px 2px 0px #091632;
            }
          }
        }
      }
      &:nth-child(3) {
        .feature__block {
          .icon__wrapper {
            color: #E26C65;
            transition: all 0.6s ease;
          }
        }
      }
      &:hover {
        .feature__block {
          .icon__wrapper {
            background: #E26C65;
            color: #091632;
            border: 2px solid #091632;
            box-shadow: 2px 2px 0px #091632;
          }
        }
      }
    }
  }
`;

export default FeatureSectionWrapper;
