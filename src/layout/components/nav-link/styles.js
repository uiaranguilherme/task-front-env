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
  color: ${(props) => props.theme.link};

  &:hover {
    font-weight: bold;
    border-bottom: 3px solid ${(props) => props.theme.link};
  }
`;

export const Ancora = styled.a`
  color: ${(props) => props.theme.link};
  &:active {
    font-weight: ${(props) => (props.active ? "bold" : "")};
  }
`;
