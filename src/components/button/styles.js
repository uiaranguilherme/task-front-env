import styled from "styled-components";

export const ContainedButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 1.1rem;
  background-color: ${(props) => props.theme.Button};
  color: white;

  svg {
    margin: 3px;
  }

  &:hover,
  &:active {
    opacity: 0.8;
  }
`;
export const TextButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin: 5px 10px;
  font-size: 0.95rem;
  font-weight: 600;

  svg {
    margin: 3px;
  }

  &:hover,
  &:active {
    opacity: 0.8;
    color: ${(props) => props.theme.Button};
  }
`;
