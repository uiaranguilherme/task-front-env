import styled, { keyframes } from "styled-components";

const animationLoad = keyframes`
    0% {
        transform: scale(0);
        transform: rotate(0.5turn);
    }
    50%{
        transform: rotate(1turn);
        transform: scale(1.2);
    }
    100% {
        transform: rotate(0.5turn);
    }
`;

const animationLoadDiv = keyframes`
    50%{
        width: 100%;
    }
    100%{
        margin-right: 100%;
    }
`;

export const LoadDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  width: 100%;
  height: 5px;
`;

export const Load = styled.div`
  position: absolute;
  height: 100%;
  width: 20px;
  background-color: #2a5adaff;

  animation-name: ${animationLoadDiv};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
`;

export const WhapperLazyComponent = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  h1 {
    margin: 20px;
  }

  img {
    height: 40%;
    animation-name: ${animationLoad};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: reverse;
  }
`;
