import React from "react"
import { ItemListProject } from './styles.js'

const ProjectsList = ({projects, setPeoples}) => {
    return(
        projects.map((project, index) => (
            <ItemListProject 
                key={index}
                onClick={() => setPeoples(project.users)}
            >
                {project.name}
            </ItemListProject>
        ))
    )
}

export default ProjectsList