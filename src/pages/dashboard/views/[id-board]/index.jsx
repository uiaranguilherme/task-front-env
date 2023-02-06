import React, { useState } from 'react'
import Layout from "../../../../layout"
import Columns from "./components/row"
import ColumnFinish from './components/column-finish'
import ColumnBacklog from './components/column-backlog'
import { WhapperPageBoardId } from './styles'
import { dataMock } from '../mock/data'
import { DragDropContext } from "react-beautiful-dnd"

export const BoardPerId = () => {
    const [data, setData] = useState(dataMock);

    const dragEnd = result => {
        console.log(result)
    }

    return(
        <Layout
            visibleSubHeader={false}
        >
            <WhapperPageBoardId>
                <DragDropContext
                    onDragEnd={dragEnd}
                >
                    <ColumnBacklog/>
                    {data.columnOrder.map((columnName, index) => {
                        const column = data.columns[columnName];
                        const tasks = column.tasks;

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
            </WhapperPageBoardId>
        </Layout>
    )
}