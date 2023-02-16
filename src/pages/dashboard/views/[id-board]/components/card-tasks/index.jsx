import React from "react"
import { WhapperCardTask } from './styles'
import HeaderTask from "./components/header"
import Responsable from "./components/responsable"
import Properties from "./components/properties"
import Childs from "./components/childs"
import { Draggable } from "react-beautiful-dnd"

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
    return(
        <Draggable
            draggableId={props._id}
            index={props.index}
        >
            {(provided) => (
                <WhapperCardTask
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    {
                        props.title &&
                        <HeaderTask
                            {...props}
                        />
                    }
                    {
                        props.responsable &&
                        <Responsable
                            {...props.responsable}
                        />
                    }
                    {
                        props.properties &&
                        <Properties
                            {...props.properties}
                        />
                    }
                    {
                        props.childs &&
                        <Childs
                            {...props.childs}
                        />
                    }
                </WhapperCardTask>
            )}
        </Draggable>
    )
}

export default CardTasks