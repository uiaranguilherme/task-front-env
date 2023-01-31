import styled from "styled-components";

export const WhapperHeaderTask = styled.div`
  display: inline;
  margin-bottom: 15px;
`;

export const LinkTitle = styled.a`
  color: ${(props) => props.theme.primary.text};

  &:hover {
    text-decoration: underline;
  }
`;
