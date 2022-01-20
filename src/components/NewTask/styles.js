import styled from "styled-components";
import { FcTodoList, AiOutlinePlusCircle } from '../../Styles/Icons';

export const Container = styled.div`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    justify-content: space-around;
    height: 25rem;
    width: auto;
`;

export const DescriTask = styled.div`
    display: flex;
    justify-content: center;
    textarea{
        margin: 0.5rem;
        padding: 0.3rem;
        
        font-size: 1rem;
        
        height: 7rem;
        width: 90%;
        
        text-decoration: none;
        border-style: none;
        border-radius: 10px;
        
        &:focus {
            border-color: #719ECE;
            box-shadow: 0 0 5px #719ECE;
        }
    }
`;

export const TitleTask = styled.div`
    font-size: 1.4rem;

    form{
            div{
                height: 2rem;
                border-style: none;

                input{
                    font-size: 1.6rem;
                    font-weight: 600;
                }
            }
    }
`;

export const SubTask = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
        div{
            display: flex;
        }
        section{
            margin: 0.3rem 0 0.8rem 2rem;
        }
        ul{
            padding-left: 1.5rem;
        }
        li{
            white-space: nowrap;
            width: 100%;
            overflow: hidden;              /* "overflow" value must be different from "visible" */

            text-overflow:    ellipsis;
        }
`;

export const SameTaskIcon = styled( FcTodoList )`
    height:1.5rem;
    width:1.5rem;
    margin-right: 0.3rem;
`;

export const SameIconTask = styled(AiOutlinePlusCircle)`
        height: 1.2rem;
        width: 1.2rem;
    &:hover{
        cursor: pointer;
        color: #719ECE;
    }
`;

export const FormContent = styled.div`
    display: flex;
`;
