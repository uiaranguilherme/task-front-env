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
    background-color: ${(props) => props.theme.hoverButtonColor};
    color: ${(props) => props.theme.link};
    font-weight: bold;
  }

  &:hover > svg {
    color: ${(props) => props.theme.link};
  }

  svg {
    color: ${(props) => props.theme.iconColor};
    padding: 5px;
    height: 1.3rem;
    width: 1.3rem;
  }
`;
