import styled from "styled-components";

export const Title = styled.h3`
  width: 100%;
  padding-bottom: 4px;
  border-bottom: 3px solid ${(props) => props.theme.primary.contrastColor};
`;

export const Fieldset = styled.fieldset`
  border-radius: 2px;
  border-style: solid;
  width: 100%;
`;
