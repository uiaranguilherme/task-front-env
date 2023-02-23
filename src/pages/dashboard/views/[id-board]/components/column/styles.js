import styled from "styled-components";

export const WhapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 14rem;
  width: ${(props) =>
    props.quantityColumn === 4 ? "calc(100% / 4)" : "15rem"};
  padding: 0 5px;
  margin: 0 1px;
  background-color: ${(props) => props.theme.secundary.background};
`;
