import styled from "styled-components";

export const WhapperSprint = styled.div`
  display: flex;
  width: ${(props) =>
    props.totalColumns == 3 ? "-webkit-fill-available" : "auto"};
  min-width: -webkit-fill-available;
  flex-direction: column;
  background-color: ${(props) => props.theme.primary.background2};
`;
export const HeaderSprint = styled.div`
  display: flex;
  min-width: auto;
  padding: 2px 5px 0 5px;
`;
export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  min-width: 100%;
  height: 100%;
`;
