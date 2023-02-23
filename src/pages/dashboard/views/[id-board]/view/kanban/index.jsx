import React, { useState } from "react";
import Columns from "../../components/column";
import { DragDropContext } from "react-beautiful-dnd";
import { dataMock } from "./mock/data";
import { Outlet } from "react-router-dom";
import CardTasks from "../../components/card-tasks";

const Kanban = () => {
  const [data, setData] = useState(dataMock);
  const dragEnd = (result) => {
    console.log(result);
  };

  return (
    <>
      <DragDropContext onDragEnd={dragEnd}>
        {data.columnOrder.map((columnName, index) => {
          const column = data.columns[columnName.title];
          const tasks = column.tasks;

          return (
            <Columns
              {...columnName}
              headerCollumn
              columnProps={{
                ...column,
                orderColumn: data.columnOrder,
              }}
              index={index}
              key={index}
            >
              {tasks.map((task, index) => (
                <CardTasks index={index} {...task} key={index} />
              ))}
            </Columns>
          );
        })}
      </DragDropContext>
      <Outlet />
    </>
  );
};

export default Kanban;
