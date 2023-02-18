import styled from "styled-components";

export const WhapperColumn = styled.div`
  width: ${(props) =>
    props.quantityColumn === 4 ? "calc(100% / 4)" : "15rem"};
  height: 100%;
  padding: 0 5px;
  margin: 0 1px;
  background-color: ${(props) => props.theme.secundary.background};
`;
