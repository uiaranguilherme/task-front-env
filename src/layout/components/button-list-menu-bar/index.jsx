import React from "react"
import { ItemButton } from './styles'

const ListItemButton = ({Icon, title, ...restPropsButton}) => {
    return(
        <ItemButton {...restPropsButton}>
            {Icon && <Icon/>}
            {title}
        </ItemButton>
    )
}

export default ListItemButton