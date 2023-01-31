import styled from "styled-components";

export const TextField = styled.input`
  height: 2rem;
  border-radius: 5px;
  padding-left: 10px;
  border: 1px solid #fcfcfc;
  color: black;
  margin: 5px 0;
  width: ${(props) => (props.fullWidth ? "100%" : "")};

  &::placeholder {
    color: #acacac;
  }

  &:hover,
  &:focus {
    border: 1px solid ${(props) => props.theme.primary.button};
  }
`;
