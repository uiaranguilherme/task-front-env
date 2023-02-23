import styled from "styled-components";

export const WhapperHeaderColumn = styled.span`
  cursor: default;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px 2px;
  height: 3rem;
  min-width: ${(props) =>
    props.totalColumns === 4 ? "calc((100%/4) - 4px)" : "14rem"};
  border-radius: 3px;
  border: ${(props) =>
    props.desableBackground ? "" : "1px solid rgba(42, 90, 218, 0.5)"};
  background-color: ${(props) =>
    props.desableBackground ? "" : props.theme.secundary.main};
`;
export const ColumnName = styled.div`
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  letter-spacing: 1px;
`;
export const ColumnCapacity = styled.div``;
