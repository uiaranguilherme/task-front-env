import styled from "styled-components";

export const HeaderSprint = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 3px 5px 3px;
  border-bottom: ${(props) =>
    props.isOpen ? "1px solid rgba(1, 1, 1, 0.2)" : "none"};

  svg {
    cursor: pointer;
    margin-right: 3px;
  }
`;
export const ContainerSprint = styled.div`
  background-color: ${(props) => props.theme.primary.background2};
  border: 1px solid ${(props) => props.theme.primary.contrastColor};
  width: ${(props) => (props.totalColumns >= 4 ? "calc(100% - 4px)" : "auto")};
  padding: 3px;
  margin: 5px 2px 0 2px;
  border-radius: 3px;
`;

export const ContentSprint = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  height: 100vh;
`;

export const OpenContainerCard = styled.div`
  display: flex;
  align-items: center;
`;
