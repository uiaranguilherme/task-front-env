import styled from "styled-components";

export const WhapperList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px 0;
  border-top: 3px solid ${(props) => props.theme.secundary.backgroundContrast};
`;

export const ButtonAddNewTask = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 3px;
  font-size: 1rem;
  background-color: transparent;

  &:hover {
    background-color: ${(props) => props.theme.secundary.backgroundContrast};
  }

  svg {
    height: 1.3rem;
    width: 1.3rem;
    margin: 0 10px 0 30px;
  }
`;
