import React from "react"
import { AvatarArea } from './styles'
import Typography from "../typograpfy";

const Avatar = ({name, size, color}) => {
    let sizePx;
    let component;

    switch(size){
        case 'small': 
            sizePx = '30px'
            component = 'p'
            break;
        case 'large': 
            sizePx = '48px'
            component = 'h4'
            break;
        default:
            sizePx = '30px';
            component = 'p'
    }

    return(
        <AvatarArea color={color} sizePx={sizePx}>
            <Typography component={component}>{name}</Typography>
        </AvatarArea>
    )
}

export default Avatar