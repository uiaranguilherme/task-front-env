import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: ${({theme}) => theme.ligthBackground};

`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Aside = styled.div``;