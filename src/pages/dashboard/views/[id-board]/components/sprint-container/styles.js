import styled from "styled-components";

export const HeaderSprint = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    margin-right: 3px;
  }
`;
export const ContainerSprint = styled.div`
  background-color: ${(props) => props.theme.primary.background2};
  border: 1px solid ${(props) => props.theme.primary.contrastColor};
  width: 100%;
  padding: 3px;
  margin-top: 5px;
`;
export const ContentSprint = styled.div``;
