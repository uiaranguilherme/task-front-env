import styled from "styled-components";

export const WhapperPeoplesPage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const ContainerProjectsList = styled.ul`
  overflow-y: scroll;
  height: 80%;
  width: 15rem;
  border-right: 1px solid ${(props) => props.theme.primary.contrastColor};
`;

export const ContainerPeoplesPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
`;
