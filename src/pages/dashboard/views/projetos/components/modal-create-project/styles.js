import styled from "styled-components";

export const TitleModalCreate = styled.div`
  width: 100%;
  padding: 0 0 10px 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.primary.text};
  border-bottom: 1.5px solid ${(props) => props.theme.primary.contrastColor};
`;

export const FooterModalCreate = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 0 0 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.primary.text};
  border-top: 1.5px solid ${(props) => props.theme.primary.contrastColor};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;
