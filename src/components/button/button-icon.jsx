import { ButtonIcon } from './styles'
import React from 'react'

const IconButton = ({children, ...restProps}) => {
    return(
        <ButtonIcon {...restProps}>
            {children}
        </ButtonIcon>
    )
}

export default IconButton;