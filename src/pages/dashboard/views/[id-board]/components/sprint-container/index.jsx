import React, { useState } from "react"
import { HeaderSprint, ContainerSprint, ContentSprint, Columns } from './styles'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Typography from '../../../../../../components/typograpfy'
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../column";

const SprintContainer = ({title, orderColumn, task, ...restProps}) => {
    const [isOpen, setOpen] = useState(false);

    const dragEnd = result => {
        console.log(result)
    }
    
    return(
        <ContainerSprint>
            <HeaderSprint>
                {isOpen ? <IoIosArrowDown/> : <IoIosArrowForward/>}
                <Typography component="h4">{title}</Typography>
            </HeaderSprint>
            <ContentSprint>
                <DragDropContext
                    onDragEnd={dragEnd}
                >
                    {
                        orderColumn.map((column, index) => {
                            const childTasks = task.childs[column.title]

                            return(
                                <Column
                                    index={index}
                                    key={index}
                                    columnProps={column}
                                    headerCollumn={false}
                                    tasks={childTasks !== undefined ? childTasks : []}
                                />
                            )
                        })
                    }
                </DragDropContext>
            </ContentSprint>
        </ContainerSprint>
    )
}

export default SprintContainer