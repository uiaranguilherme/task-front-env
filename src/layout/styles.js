import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.ligthBackground};
`;

export const WhapperPage = styled.div`
  display: flex;
  height: 100%;
`;
export const PageArea = styled.div`
  width: 100%;
`;
