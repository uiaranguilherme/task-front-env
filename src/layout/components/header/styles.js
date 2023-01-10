import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 45px;
  padding: 5px 10px;

  border-bottom: 0.5px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.headerColor};

  -webkit-box-shadow: 0px 19px 38px -32px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 0px 19px 38px -32px rgba(0, 0, 0, 0.59);
  box-shadow: 0px 19px 38px -32px rgba(0, 0, 0, 0.59);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  h4 {
    padding-left: 8px;
    font-size: 1.2rem;
  }

  img {
    height: 40px;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Links = styled.ul`
  display: flex;
  list-style-type: none;
  height: 100%;
`;
export const UserArea = styled.div`
  padding: 10px;
`;
