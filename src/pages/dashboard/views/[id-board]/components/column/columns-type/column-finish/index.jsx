import React from "react";
import { WhapperColumn } from "../../styles";
import HeaderColumn from "../../components/header-column";
import { IoIosArrowBack } from "react-icons/io";
import { WhapperList } from "../column-backlog/styles";
import { Droppable } from "react-beautiful-dnd";
import IconButton from "../../../../../../../../components/button/button-icon";

const ColumnFinish = ({ children, columnProps, ...restProps }) => {
  return (
    <Droppable droppableId={restProps.id} key={restProps.index}>
      {(provided) => (
        <WhapperColumn
          ref={provided.innerRef}
          {...provided.droppableProps}
          quantityColumn={columnProps.orderColumn.length}
        >
          <HeaderColumn desableBackground={true} columnTitle="Finalizados">
            <IconButton title="Fechar Backlog">
              <IoIosArrowBack />
            </IconButton>
          </HeaderColumn>
          <WhapperList>
            {children}
            {provided.placeholder}
          </WhapperList>
        </WhapperColumn>
      )}
    </Droppable>
  );
};
export default ColumnFinish;
