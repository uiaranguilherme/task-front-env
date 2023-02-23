import React from "react";
import ColumnBacklog from "./columns-type/column-backlog";
import ColumnDefault from "./columns-type/column-default";
import ColumnFinish from "./columns-type/column-finish";
//{tasks.map((task, index) => (
//  <CardTasks index={index} {...task} key={index} />
//))}

const Column = ({ children, type, ...restProps }) => {
  switch (type) {
    case "add-item":
      return <h1>add item</h1>;
    case "backlog":
      return <ColumnBacklog {...restProps}>{children}</ColumnBacklog>;
    case "entregue":
      return <ColumnFinish {...restProps}>{children}</ColumnFinish>;
    default:
      return <ColumnDefault {...restProps}>{children}</ColumnDefault>;
  }
};

export default Column;
