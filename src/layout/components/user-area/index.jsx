import React from "react"
import { AvatarArea } from './styles'

const Avatar = ({name}) => {
    return(
        <AvatarArea>
            <h4>
                {name}
            </h4>
        </AvatarArea>
    )
}

export default Avatar