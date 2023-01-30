import React from "react"
import { Box, Title } from "./styles";

const BoxSolid = ({children, title}) => {
    return(
        <Box>
            <Title>{title}</Title>
            {children}
        </Box>
    );
}

export default BoxSolid