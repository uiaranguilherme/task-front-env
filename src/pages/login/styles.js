import styled from "styled-components";

export const ContainerLoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  img {
    height: 60px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  input {
    margin-top: 10px;
    width: 100%;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 6.5rem;
`;
