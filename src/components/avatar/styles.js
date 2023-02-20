import styled from "styled-components";

export const AvatarArea = styled.div`
  cursor: pointer;
  height: ${(props) => props.sizePx};
  width: ${(props) => props.sizePx};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) =>
    props.color ? props.color : props.theme.secundary.backgroundContrast};

  h4 {
    font-weight: 400;
    font-size: 1.4rem;
    color: ${(props) => props.theme.secundary.text};
  }
`;
