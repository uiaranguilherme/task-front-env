import styled from "styled-components";

export const WhapperSprint = styled.div`
  display: flex;
  width: auto;
  min-width: -webkit-fill-available;
  flex-direction: column;
  background-color: ${(props) => props.theme.primary.background2};
`;
export const HeaderSprint = styled.div`
  display: flex;
  min-width: auto;
  padding: 2px 0px;
`;
export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.totalColumns <= 4 ? "auto" : "fit-content")};
  height: 100%;
`;
