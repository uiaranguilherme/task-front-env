import styled from "styled-components";

export const WhapperHeaderColumn = styled.span`
  cursor: default;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
  height: 3rem;
  width: 100%;
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
