import styled from 'styled-components';

const FeatureSliderWrapper = styled.div`
  position: relative;
  padding-top: 200px;
  @media (max-width: 1440px) {
    padding-top: 140px;
  }
  .FeatureSliderInner {
    span:nth-child(1) {
      position: absolute;
      display: block;
      width: 5%;
      padding-bottom: 5%;
      border-radius: 50%;
      top: 60%;
      left: 50%;
      opacity: 0;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      animation: pulsei 4.2s ease-out infinite;
      backface-visibility: hidden;
      pointer-events: none;
    }
    span:nth-child(2) {
      content: '';
      position: absolute;
      display: block;
      width: 5%;
      padding-bottom: 5%;
      border-radius: 50%;
      top: 60%;
      left: 50%;
      opacity: 0;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      animation: pulsei 4.2s ease-out infinite;
      backface-visibility: hidden;
      pointer-events: none;
      animation-delay: 1s;
    }
    span:nth-child(3) {
      content: '';
      position: absolute;
      display: block;
      width: 5%;
      padding-bottom: 5%;
      border-radius: 50%;
      top: 60%;
      left: 50%;
      opacity: 0;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      animation: pulsei 4.2s ease-out infinite;
      backface-visibility: hidden;
      pointer-events: none;
      animation-delay: 2s;
    }
  }
  .FeatureSlider {
    padding-top: 200px;
    padding-bottom: 100px;
    position: relative;

    .image-gallery {
      position: relative;
      z-index: 2;
    }
    @keyframes pulsei {
      0% {
        transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
        border: 1px solid rgba(0, 0, 0, 0.5);
        opacity: 1;
        width: 5%;
        padding-bottom: 5%;
      }

      100% {
        transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
        opacity: 0;
        width: 67%;
        border: 1px solid rgba(0, 0, 0, 0.5);
        padding-bottom: 67%;
      }
    }

    .image-gallery-slide-wrapper {
      width: 775px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
     
      .image-gallery-swipe {
        padding-left: 0px;
        overflow: hidden;
      }
    }
    .image-gallery-thumbnails-wrapper {
      position: static;

      .image-gallery-thumbnails-container {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        top: 0;
        left: 0;

        .image-gallery-thumbnail {
          border: 0;
          .image-gallery-thumbnail-inner {
            outline: none;
            &:focus {
              outline: none;
            }
          }
          img {
            transition: 0.01 ease-in-out;
            width: 40px;
          }

          &:nth-child(1) {
            position: absolute;
            top: -140px;
            left: 16.666%;
          }
          &:nth-child(2) {
            position: absolute;
            top: -140px;
            right: 16.666%;
          }
          &:nth-child(3) {
            position: absolute;
            top: 45%;
            right: 0;
            transform: translateY(-50%);
          }
          &:nth-child(4) {
            position: absolute;
            bottom: -125px;
            right: 16.666%;
          }
          &:nth-child(5) {
            position: absolute;
            bottom: -145px;
            left: 16.666%;
          }
          &:nth-child(6) {
            position: absolute;
            top: 45%;
            left: 0;
            transform: translateY(-50%);
          }
          .image-gallery-thumbnail-label {
            position: relative;
            margin-top: 2px;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: -0.01em;
            font-weight: 600;
            color: #091632;
            font-family: 'poppins', sans-serif;
            top: 0;
            text-shadow: none;
            transform: none;
            white-space: normal;
            width: 100%;
          }
          &.active {
            border: 0;
            .image-gallery-thumbnail-label {
              margin-top: 30px;
            }
            img {
              transition: all 0.35s ease;
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
`;
export default FeatureSliderWrapper;
