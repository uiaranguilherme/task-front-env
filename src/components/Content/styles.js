import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    height: auto;
    width: 100%;


    @media (max-width: 1024px){
        flex-direction: column;
        overflow: auto;
    }
`;