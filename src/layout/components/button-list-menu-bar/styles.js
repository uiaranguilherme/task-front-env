import styled from "styled-components";

export const ItemButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 2rem;
  margin-top: 5px;
  background-color: transparent;

  &:hover {
    background-color: ${(props) => props.theme.primary.backgroundContrast};
    color: ${(props) => props.theme.primary.button};
    font-weight: bold;
  }

  &:hover > svg {
    color: ${(props) => props.theme.primary.button};
  }

  svg {
    color: ${(props) => props.theme.primary.icon};
    padding: 5px;
    height: 1.3rem;
    width: 1.3rem;
  }
`;
