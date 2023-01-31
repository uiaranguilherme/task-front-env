import styled from "styled-components";

export const Link = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 5rem;
  margin: 3px;
  padding-bottom: 5px;
  border-bottom: 3px solid trasparent;
  color: ${(props) => props.theme.primary.button};

  &:hover {
    font-weight: bold;
    border-bottom: 3px solid ${(props) => props.theme.primary.button};
  }
`;

export const Ancora = styled.a`
  color: ${(props) => props.theme.primary.button};
  &:active {
    font-weight: ${(props) => (props.active ? "bold" : "")};
  }
`;
