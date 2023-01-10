import styled from "styled-components";

export const ContainerSubHeader = styled.span`
  display: flex;
  align-items: center;
  height: 2rem;
  background-color: ${(props) => props.theme.subHeaderBackgroundColor};
  border-bottom: 0.5px solid rgba(217, 217, 217, 0.8);
`;
