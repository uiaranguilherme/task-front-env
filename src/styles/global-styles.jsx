import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: -apple-system, Source Sans Pro, sans-serif ;
    }
    button, input, a{
        text-decoration: none;
        border-radius: 0;
        border-style: none;
    }
    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    }
`;