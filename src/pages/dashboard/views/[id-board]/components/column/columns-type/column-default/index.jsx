import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { WhapperColumn } from "../../styles";
import HeaderColumn from "../../components/header-column";

const ColumnDefault = ({
  children,
  columnProps,
  tasks,
  headerCollumn,
  ...restProps
}) => {
  return (
    <Droppable droppableId={restProps.id} key={restProps.index}>
      {(provided) => (
        <WhapperColumn
          ref={provided.innerRef}
          {...provided.droppableProps}
          quantityColumn={columnProps.orderColumn.length}
        >
          {headerCollumn && (
            <HeaderColumn
              capacity={10}
              limit={20}
              columnTitle={restProps.title}
              key={columnProps.id}
            />
          )}
          {children}
          {provided.placeholder}
        </WhapperColumn>
      )}
    </Droppable>
  );
};

export default ColumnDefault;
