import styled from "styled-components";
import { BsFillCheckCircleFill } from "../../Styles/Icons";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
  
`;
export const TaskDescription = styled.div`
    margin-left: 1rem;
    width: 90%;
    height: 10rem;
    border-radius: 10px;
`;
export const SubTask = styled.div`
    padding: 0 0 1rem 0;
    ul{
        margin-left: 2rem ;
        list-style: none;

        li{
            display: flex;
            align-items: center;
            height: 0.9rem;
            padding: 3px;
            cursor: pointer;

            &:hover > svg {
                color: green;
            }
            p{
                padding-left:4px;
            }
        }
    }
`;
export const TecList = styled.div`
    overflow: auto;
    display: flex;
    margin-bottom: 2rem;
    div{
        display: flex;
        align-items: center;
        padding: 2px 6px;
        width: auto;
        height: 1rem;
        border-radius: 10px;
        background-color:yellow;
    }
`;
export const Icon = styled(BsFillCheckCircleFill)`
    color: gray;

   
`;
export const PreCreate = styled.div`
    margin: 1rem 0 0.3rem 0;
    width: 100%;
    height: 1rem;
    border-radius: 10px;
    background-color: green;
`;