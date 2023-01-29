import styled from "styled-components";

export const WhapperDialog = styled.div`
  position: absolute;
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
