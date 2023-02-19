import React from "react"
import { ItemListProject } from './styles.js'

const ProjectsList = ({projects}) => {
    return(
        projects.map((project, index) => (
            <ItemListProject 
                key={index}
            >
                {project.name}
            </ItemListProject>
        ))
    )
}

export default ProjectsList