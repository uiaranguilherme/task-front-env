import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh !important;
    
    section{
            overflow: scroll;
            display: flex;
            flex-direction: column;
        }
  
`;

export const PreCreate = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    color: white;
    margin: 1rem 0 1rem 0;
    width: 19.5rem;
    height: 1rem;
    border-radius: 10px;
    background-color: greenyellow;
`;