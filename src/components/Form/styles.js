import styled from "styled-components";

export const Container = styled.div`
    border-bottom-style: solid;
    border-color: transparent;
    border-width: 1px;
    
    &:hover, &:focus{
        
        border-color: black;
    }
    input{
        padding-left: 0.3rem;
        height: 1.2rem;
        font-size: 1rem;

    }
`;
export const ContainerTec = styled.div`
    display: flex;
    border-bottom-style: solid;
    border-color: transparent;
    max-width:6rem;
    min-width: 2rem;
    
    input{
        background-color: transparent;
        width: 100%;
        padding-left: 0.3rem;
        height: 1.2rem;
        font-size: 1rem;

    }
`;