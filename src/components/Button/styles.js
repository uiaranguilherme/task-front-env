import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        cursor: pointer;
        border-radius: 20px;
        height: 2.6rem;
        width: 7.8rem;

        font-size: 1.3rem;
        color: white;
        background-color: ${(props) => props.color};

        &:hover, &:focus{
            opacity: 0.8;
        }
    }
`;