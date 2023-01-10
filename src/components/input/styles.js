import styled from "styled-components";

export const TextField = styled.input`
  height: 2rem;
  border-radius: 5px;
  padding-left: 10px;
  border: 1px solid #eee;

  &:hover,
  &:focus {
    border: 1px solid ${(props) => props.theme.link};
  }
`;
