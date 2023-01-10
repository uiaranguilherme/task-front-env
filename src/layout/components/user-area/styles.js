import styled from "styled-components";

export const AvatarArea = styled.div`
  cursor: pointer;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.avatarColor};

  h4 {
    font-weight: 400;
    font-size: 1.4rem;
    color: ${(props) => props.theme.avatarFontColor};
  }
`;
