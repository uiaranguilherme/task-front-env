import React, { useState } from "react"
import { HeaderSprint, ContainerSprint, ContentSprint, Columns, OpenContainerCard } from './styles'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Typography from '../../../../../../components/typograpfy'
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../column";

const SprintContainer = ({orderColumn, task, ...restProps}) => {
    const [isOpen, setOpen] = useState(false);
    const dragEnd = result => {
        console.log(result)
    }
    
    return(
        <ContainerSprint 
            totalColumns={orderColumn.length}
        >
            <HeaderSprint
                isOpen={isOpen}
            >
                <OpenContainerCard 
                    onClick={() => setOpen(!isOpen)}
                >
                    {isOpen ? <IoIosArrowDown/> : <IoIosArrowForward/>}
                </OpenContainerCard>
                <Typography component="h4">{task.title}</Typography>
            </HeaderSprint>
            <DragDropContext
                onDragEnd={dragEnd}
            >
                <ContentSprint
                    isOpen={isOpen}
                >
                {
                    orderColumn.map((column, index) => {
                        const childTasks = task.childs[column.title]

                        return(
                            <Column
                                style={{width: '350px'}}
                                index={index}
                                key={index}
                                columnProps={{
                                    ...column,
                                    orderColumn,
                                }}
                                headerCollumn={false}
                                tasks={childTasks !== undefined ? childTasks : []}
                            />
                        )
                    })
                }
                </ContentSprint>
            </DragDropContext>
        </ContainerSprint>
    )
}

export default SprintContainer