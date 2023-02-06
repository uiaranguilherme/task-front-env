import styled from "styled-components";

export const ContainerMenuBar = styled.div`
  min-width: 15rem;
  height: 100%;
  background-color: ${(props) => props.theme.secundary.background};
  border-right: 0.5px solid ${(props) => props.theme.secundary.contrastColor};

  -webkit-box-shadow: 13px 0px 38px -32px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 13px 0px 38px -32px rgba(0, 0, 0, 0.59);
  box-shadow: 13px 0px 38px -32px rgba(0, 0, 0, 0.45);
`;

export const OrganizationWhapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0 10px 8px;
  margin: 10px 5px 5px 5px;

  border-bottom: 1px solid #eee;
`;

export const Project = styled.span``;

export const Organization = styled.span`
  color: ${(props) => props.theme.secundary.text};
`;

export const LogoProject = styled.span`
  display: flex;
  align-items: center;
  margin-right: 6px;
`;

export const InformationProject = styled.span``;
