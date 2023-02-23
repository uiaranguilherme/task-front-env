import React from "react";
import { WhapperColumn } from "../../styles";
import HeaderColumn from "../../components/header-column";
import { IoIosArrowBack } from "react-icons/io";
import { WhapperList, ButtonAddNewTask } from "./styles";
import IconButton from "../../../../../../../../components/button/button-icon";
import { FcPlus } from "react-icons/fc";
import { Droppable } from "react-beautiful-dnd";

const ColumnBacklog = ({ children, columnProps, ...restProps }) => {
  return (
    <Droppable droppableId={restProps.id} key={restProps.index}>
      {(provided) => (
        <WhapperColumn
          ref={provided.innerRef}
          {...provided.droppableProps}
          quantityColumn={columnProps.orderColumn.length}
        >
          <HeaderColumn desableBackground={true} columnTitle="Backlog">
            <IconButton title="Fechar Backlog">
              <IoIosArrowBack />
            </IconButton>
          </HeaderColumn>
          <WhapperList>
            <ButtonAddNewTask>
              <FcPlus />
              Adicionar Tarefa
            </ButtonAddNewTask>
            {children}
            {provided.placeholder}
          </WhapperList>
        </WhapperColumn>
      )}
    </Droppable>
  );
};

export default ColumnBacklog;
