import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.ligthBackground};
`;

export const WhapperPage = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const PageArea = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
`;
