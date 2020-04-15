import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 180px 0 0px 0;
  @media (max-width: 990px) {
    padding: 80px 0 40px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0 20px 0;
  }

  @keyframes ScaleInUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .update-screen-tab {
    border: 0;
    overflow: initial;
    .rc-tabs-ink-bar {
      display: none !important;
    }
    .rc-tabs-bar {
      border: 0;
    }
    .rc-tabs-nav-container {
      @media (max-width: 767px) {
        margin-bottom: 15px;
      }
      &:after {
        position: absolute;
        width: 100%;
        display: block;
        left: 0;
        bottom: 0;
        z-index: -1;
      }
      &:not(.rc-tabs-nav-container-scrolling) {
        .rc-tabs-nav-scroll {
          width: 100%;
          text-align: center;
          .rc-tabs-nav {
            float: none;
            display: block;
            .rc-tabs-tab {
              display: inline-block;
              float: none;
            }
          }
        }
      }
      .rc-tabs-tab {
        font-size: 18px;
        color: #091632;
        font-weight: 700;
        font-style: italic;
        text-transform: uppercase;
        min-width: 230px;
        text-align: center;
        margin-right: 0;
        transition: 0.25s ease-in-out;
        &:hover {
          color: #82e3e3;
        }
        &:after {
          position: absolute;
          font-weight: 700;
          width: 100%;
          bottom: 0;
          left: 0;
          display: block;
          @media (max-width: 767px) {
            display: none;
          }
        }
        &:after {
          background: #82e3e3;
          transform: scaleX(0);
          transform-origin: right center 0;
          transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
        }
        &.rc-tabs-tab-active {
          color: #82e3e3;
          &:after {
            transform: scaleX(1);
            transform-origin: left center 0;
            transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
          }
        }
        > div {
          margin-right: 8px;
        }
        @media (max-width: 1199px) {
          font-size: 16px;
          padding: 0 0 20px 0;
          min-width: 170px;
        }
        @media (max-width: 990px) {
          min-width: auto;
          padding: 0 20px 15px 20px;
        }
        @media (max-width: 767px) {
          font-size: 14px;
          svg {
            width: 20px;
          }
        }
      }
    }
    .rc-tabs-content {
      .rc-tabs-tabpane {
        overflow: hidden;
        &.rc-tabs-tabpane-active {
          animation: 0.7s ScaleInUp;
        }
        > img {
          max-width: 100%;
          height: auto;
          display: block;
        }
      }
    }
  }

  .rc-tabs-tab-prev-icon,
  .rc-tabs-tab-next-icon {
    font-size: 20px;
    color: #ff4362;
    line-height: 1;
    display: block;
  }
`;

export default SectionWrapper;
