import styled from "styled-components";

export const WhapperGridContainer = styled.div`
  display: grid;
  padding: 0 10px 0 0;
  width: 100%;
  grid-column-gap: ${(props) => props.spaces * 10 + "px"};
  grid-template-columns: repeat(12, 1fr);
`;

export const WhapperGridItem = styled.div`
  grid-column: span ${(props) => props.coll};
`;
