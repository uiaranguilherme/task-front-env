import styled from "styled-components";

export const WhapperCardTask = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 5px 3px;
  margin: 5px 0;
  width: 100%;
  border-color: ${(props) => props.color};
  border-style: solid;
  border-width: 3px 1px 1px 1px;
`;
