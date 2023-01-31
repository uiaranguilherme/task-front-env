import styled from "styled-components";

export const WhapperReponsabilyUser = styled.div`
  height: 2.3rem;
  position: relative;
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.secundary.backgroundContrast};
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${(props) => props.theme.secundary.contrastColor};
  }
`;

export const Line = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px;

  &:hover {
    background-color: ${(props) => props.theme.secundary.background};
  }
`;
