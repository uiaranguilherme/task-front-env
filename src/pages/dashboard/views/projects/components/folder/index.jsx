import React from "react"
import { FolderIcon, FolderWhapper, FolderName } from './styles'

const Folder = ({name}) => {
    return(
        <FolderWhapper title={name}>
            <FolderIcon/>
            <FolderName>
                {name}
            </FolderName>
        </FolderWhapper>
    )
}

export default Folder