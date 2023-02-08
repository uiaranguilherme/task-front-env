import styled from "styled-components";

export const ItemButton = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 3rem;
  margin-top: 5px;
  font-size: 0.9rem;
  background-color: transparent;

  &:hover {
    background-color: ${(props) => props.theme.primary.backgroundContrast};
    color: ${(props) => props.theme.primary.button};
    font-weight: bold;
  }

  svg {
    color: ${(props) => props.theme.primary.icon};
    padding: 5px;
    height: 2.2rem;
    width: 2.2rem;
  }

  &:hover > svg {
    color: ${(props) => props.theme.primary.button};
  }
`;
