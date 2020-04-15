import styled, { keyframes } from 'styled-components';

const slideShow = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
  cursor: default !important;
  @media only screen and (max-width: 1360px) {
    padding: 50px 0;
  }
  @media only screen and (max-width: 991px) {
    padding: 30px 0 40px;
  }
`;

export const ImageSlider = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  cursor: default !important;
  @media only screen and (max-width: 991px) {
    max-width: 600px;
  }
  @media only screen and (max-width: 767px) {
    width: calc(100% - 60px);
    margin: 0 auto;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 100%;
    position: absolute;
    top: 0;
    background: linear-gradient(to right, #f4f4f1, rgba(255, 255, 255, 0));
    z-index: 1;
    cursor: default !important;
  }

  &::before {
    left: 0;
    cursor: default !important;
  }

  &::after {
    right: 0;
    transform: rotateZ(180deg);
    cursor: default !important;
  }
`;

export const ImageSlide = styled.div`
  height: 30px;
  flex-shrink: 0;
  animation: ${slideShow} 55s linear infinite;
  cursor: default !important;
`;

export default SectionWrapper;
