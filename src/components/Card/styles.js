import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;

    min-height: auto;
    width: 17rem;
    
    max-width: 20rem;
    max-height: 30rem;

    height: ${(props) => props.heigth };
    width: ${(props) => props.width };

    padding: 1rem;

    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.40); 
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.40); 
`;