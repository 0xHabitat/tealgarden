import styled from 'styled-components';

export const Sun = styled.div`
  width: 350px;
  height: 350px;
  position: fixed;
  display: block;
  top: -15%;
  left: -5%;
  z-index: -2;
  background-color: #ffde00;
  border-radius: 50%;
  box-shadow: 0 0 0 20px #ffde0080, 0 0 0 40px #ffde0040, 0 0 0 60px #ffde0020,
    0 0 0 80px #ffde0010, 0 0 0 100px #ffde0000, 0 0 40px 100px #ffde0010;
  animation: sunrise 2s infinite linear forwards, rays 2s 2s infinite linear;

  @keyframes sunrise {
    0% {
      box-shadow: none;
    }
  }

  @keyframes rays {
    0% {
      box-shadow: 0 0 0 0 #ffde0080, 0 0 0 20px #ffde0080, 0 0 0 40px #ffde0040,
        0 0 0 60px #ffde0020, 0 0 0 80px #ffde0010, 0 0 40px 100px #ffde0010;
    }
    100% {
      box-shadow: 0 0 0 20px #ffde0080, 0 0 0 40px #ffde0040,
        0 0 0 60px #ffde0020, 0 0 0 80px #ffde0010, 0 0 0 100px #ffde0000,
        0 0 40px 100px #ffde0010;
    }
  }
`;
