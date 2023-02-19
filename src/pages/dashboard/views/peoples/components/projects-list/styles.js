import styled from "styled-components";

export const ItemListProject = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 3rem;
  width: 100%;

  &:hover {
    color: ${(props) => props.theme.primary.button};
    background-color: ${(props) => props.theme.primary.backgroundContrast};
  }
`;
