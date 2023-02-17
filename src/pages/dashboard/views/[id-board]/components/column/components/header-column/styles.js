import styled from "styled-components";

export const WhapperHeaderColumn = styled.span`
  cursor: default;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px 2px;
  height: 3rem;
  min-width: ${(props) =>
    props.totalColumns === 4 ? "calc((100%/4) - 4px)" : "15rem"};
  border-radius: 6px;
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
