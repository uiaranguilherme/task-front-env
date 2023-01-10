import styled from "styled-components";

export const ContainedButton = styled.button`
  cursor: pointer;
  border-radius: 10px;
  font-size: 1.1rem;
  background-color: ${(props) => props.theme.Button};
  color: white;

  &:hover,
  &:active {
    opacity: 0.8;
  }
`;
export const TextButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  margin: 5px 10px;
  font-size: 0.95rem;
  font-weight: 600;

  &:hover,
  &:active {
    opacity: 0.8;
    color: ${(props) => props.theme.Button};
  }
`;
