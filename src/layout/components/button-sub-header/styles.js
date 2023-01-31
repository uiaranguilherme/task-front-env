import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 7rem;
  height: 90%;
  padding: 5px;
  font-weight: 400;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid transparent;

  &:hover {
    color: ${(props) => props.theme.primary.button};
    font-weight: bold;
    border: 1px solid ${(props) => props.theme.primary.button};
  }

  svg {
    font-size: 1.2rem;
  }
`;
