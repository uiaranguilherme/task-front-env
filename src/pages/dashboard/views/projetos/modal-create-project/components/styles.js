import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  min-height: 100px;
  margin: 5px 0;
  padding: 10px 0;
  width: 100.5%;
  border-radius: 3px;
  border: 3px solid ${(props) => props.theme.borderColor};
`;

export const Title = styled.span`
  position: absolute;
  padding: 1px 5px;
  background-color: #fffd;
  transform: translate(10px, -23px);
`;
