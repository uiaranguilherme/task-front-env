import React from "react"
import { WhapperColumn, Footer } from "./styles";
import HeaderColumn from './components/header-column'
import CardTasks from "../../../components/card-tasks";
import { Droppable } from "react-beautiful-dnd";

const Column = ({columnProps, tasks, ...restProps}) => {

    return(
        <Droppable droppableId={columnProps.id} key={restProps.index}>
            {(provided) => (
                <WhapperColumn
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <HeaderColumn
                        capacity={10}
                        limit={20}
                        columnTitle={columnProps.name}
                        key={columnProps.id}
                    />
                    {tasks.map((task, index) => <CardTasks index={index} {...task} key={index}/>)}
                    {provided.placeholder}
                </WhapperColumn>
            )}
        </Droppable>
    )
}

export default Column;