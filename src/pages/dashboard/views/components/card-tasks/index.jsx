import React from "react"
import { WhapperCardTask } from './styles'
import HeaderTask from "./components/header"
import Responsable from "./components/responsable"
import Properties from "./components/properties"
import Childs from "./components/childs"

/**
 *
 * projeto
 * state
 * bloqueio
 * tipo de bloqueio
 * motivo do bloqueio
 *
 *  **/


const CardTasks = (props) => {
    console.log(props);
    return(
        <WhapperCardTask>
            <HeaderTask
                type={props.type}
                title={props.title}
                id={props.id}
                color={props.color}
            />
            <Responsable
                {...props.responsable}
            />
            <Properties
                {...props.properties}
            />
            <Childs
                {...props.childs}
            />
        </WhapperCardTask>
    )
}

export default CardTasks