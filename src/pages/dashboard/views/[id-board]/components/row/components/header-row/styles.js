import styled from "styled-components";

export const WhapperHeaderRow = styled.span`
  cursor: default;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  width: 100%;
  background-color: ${(props) => props.theme.Background};
`;
export const RowName = styled.div`
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  letter-spacing: 1px;
`;
export const RowCapacity = styled.div``;
