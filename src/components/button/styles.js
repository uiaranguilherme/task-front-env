import styled from "styled-components";

export const ContainedButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 1.1rem;
  width: ${(props) => (props.fullWidth ? "100%" : "")};
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
  width: ${(props) => (props.fullwidth ? "100%" : "")};

  svg {
    margin: 3px;
  }

  &:hover,
  &:active {
    opacity: 0.8;
    color: ${(props) => props.theme.Button};
  }
`;
export const OutlinedButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 1.1rem;
  border-style: solid;
  border-width: 1.5px;
  width: ${(props) => (props.fullWidth ? "100%" : "")};
  border-color: ${(props) => props.theme.Button};

  svg {
    margin: 3px;
  }

  &:hover,
  &:active {
    opacity: 0.8;
  }
`;
