import React from "react"
import { Button } from "./styles"

const ButtonSubHeader = ({children, ...restProps}) => {
    return( 
        <Button 
            {...restProps}
        >
            {children}
        </Button>
    )
}

export default ButtonSubHeader