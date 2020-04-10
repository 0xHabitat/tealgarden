import styled from 'styled-components';

const FeatureSliderWrapper = styled.div`
  position: relative;
  padding-top: 200px;
  @media (max-width: 1440px) {
    padding-top: 140px;
  }

  .sun {
	width: 550px;
	height: 550px;
  position: absolute;
  display: block;
  top: 37%;
  left: 31%;
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
  }

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

  .FeatureSlider {
    padding-top: 200px;
    padding-bottom: 100px;
    position: relative;

    .image-gallery {
      position: relative;
      z-index: 2;
    }
    
  }

    .image-gallery-slide-wrapper {
      width: 675px;
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
