import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: ${({theme}) => theme.ligthBackground};

`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Aside = styled.div`
    width: 100%;
`;
