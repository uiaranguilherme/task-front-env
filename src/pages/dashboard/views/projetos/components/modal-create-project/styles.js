import styled from "styled-components";

export const TitleModalCreate = styled.div`
  width: 100%;
  padding: 0 0 10px 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.title};
  border-bottom: 1.5px solid ${(props) => props.theme.borderColor};
`;

export const FooterModalCreate = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 0 0 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.title};
  border-top: 1.5px solid ${(props) => props.theme.borderColor};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;
