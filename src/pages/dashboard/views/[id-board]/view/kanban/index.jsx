import React, { useState } from "react"
import Columns from "../../components/column"
import ColumnFinish from '../../components/column-finish'
import ColumnBacklog from '../../components/column-backlog'
import { DragDropContext } from "react-beautiful-dnd"
import { dataMock } from './mock/data'

const Kanban = () => {
    const [data, setData] = useState(dataMock);
    const dragEnd = result => {
        console.log(result)
    }

    return(
        <DragDropContext
            onDragEnd={dragEnd}
        >
            <ColumnBacklog/>
            {data.columnOrder.map((columnName, index) => {
                const column = data.columns[columnName];
                const tasks = column.tasks
                return(
                    <Columns
                        columnProps={column}
                        tasks={tasks}
                        index={index}
                        key={index}
                    />
                )
            })}
            <ColumnFinish/>
        </DragDropContext>
    )
}

export default Kanban