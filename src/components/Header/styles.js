import styled from "styled-components";
import { FcSearch, FcSettings } from "./../../Styles/Icons"; 

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    margin: 1rem;
    height: 4rem;
    width: auto;

    border-radius: 10px;

    background-color: ${({theme}) => theme.ligthCard};
    -webkit-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.40); 
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.40);  
    img{
        height: 4rem;
        margin-right: 2rem;
    }
`;
export const SearchMenu  = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.8rem;
    border-radius: 10rem;

    input{
        padding: 0.3rem 0.3rem;
        border-radius: 0px;
        font-size: 1rem;
        width: 80%;
    }
    &:hover{
        background-color: ${({theme}) => theme.ligthBackground};
    }
`;

export const Search = styled(FcSearch)`
    width: 2.0rem;
    height: 2.0rem;
    margin: 0.3rem;
`;

export const Settings = styled(FcSettings)`
    width: 2.0rem;
    height: 2.0rem;
    margin: 0.3rem;
    cursor: pointer;
`;