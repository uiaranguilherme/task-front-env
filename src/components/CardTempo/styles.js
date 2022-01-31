import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-around;

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    div{
        margin: 0.3rem;

        h5{
            margin: 0.7rem 0;
            font-size: 1.5rem;
        }
    }
`;