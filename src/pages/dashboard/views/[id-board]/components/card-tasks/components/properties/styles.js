import styled from "styled-components";

export const WhapperInfoTask = styled.div``;

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2px;
`;

export const Label = styled.div`
  max-width: 4.3rem;
  min-width: 4.3rem;
`;

export const Input = styled.input`
  margin-left: 5px;
  min-width: 7.5rem;
  max-width: 7.5rem;
  background-color: transparent;

  &:focus {
    background-color: #fff;
  }
`;

export const Select = styled.select`
  margin-left: 5px;
  min-width: 7.5rem;
  max-width: 7.5rem;
  background-color: transparent;
  border: none;

  &:focus {
    background-color: #fff;
  }
`;
