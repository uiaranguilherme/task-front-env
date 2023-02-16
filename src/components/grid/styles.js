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

export const WhapperTemplateAreaContainer = styled.div`
  overflow: scroll;
  display: grid;
  grid-template-areas: ${(props) => `"${props.areas.join(" ")}"`};
  grid-template-columns: ${(props) =>
    `repeat(${props["total-columns"]}, ${props["large-columns"]})`};
  grid-auto-rows: min-content;
`;

export const WhapperTemplateArea = styled.div`
  grid-column: ${(props) => props.area};
`;
