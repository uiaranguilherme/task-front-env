import React from "react"
import { WhapperSprint, HeaderSprint, Columns } from './styles'
import { dataMock, orderColumn } from './mock/index'
import SprintContainer from "../../components/sprint-container"
import HeaderColumn from "../../components/column/components/header-column"

const Sprint = () => {

    return(
        <WhapperSprint>
            <HeaderSprint>
                {orderColumn.map( column => (
                    <HeaderColumn
                        key={column.id}
                        columnTitle={column.title}
                        totalColumns={orderColumn.length}
                    />
                ))}
            </HeaderSprint>
            {
                dataMock.map((task, index) => (
                    <Columns
                        totalColumns={orderColumn.length}
                    >
                        <SprintContainer orderColumn={orderColumn} key={index} task={task}/>
                    </Columns>
                ))
            }
        </WhapperSprint>
    );
}

export default Sprint