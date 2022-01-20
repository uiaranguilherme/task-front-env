import styled from "styled-components";
import { FiTag } from '../../Styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    
`;
export const TagIcon = styled(FiTag)`
    cursor: pointer;
    height:1.5rem;
    width:1.5rem;
    margin-right: 0.3rem;

    &:hover{
        color:  #719ECE;
    }
`;

export const TecInput = styled.div`
    display: ${(props) => props.display ? 'flex' : 'none'};
    background-color: yellow;
    border-radius: 10px;
    
    input{
        text-align: center;
    }
`;

export const TecList = styled.div`
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    align-items: center;
    height: 2rem;
    margin: 3px;
    
    div{
        height: 1.4rem;
        padding: 0 6px;
        margin: 3px;
        background-color: yellow;
        border-radius: 10px;
    }
`;