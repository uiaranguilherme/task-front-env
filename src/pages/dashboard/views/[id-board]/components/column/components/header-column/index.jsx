import React from "react";
import { WhapperHeaderColumn, ColumnName, ColumnCapacity } from "./styles";

const HeaderColumn = ({
  children,
  columnTitle,
  capacity,
  limit,
  desableBackground,
  width,
  ...restProps
}) => {
  return (
    <WhapperHeaderColumn
      {...restProps}
      totalColumns={restProps.totalColumns}
      desableBackground={desableBackground}
    >
      <ColumnName title={columnTitle}>{columnTitle}</ColumnName>
      <ColumnCapacity>{capacity && `${capacity}/${limit}`}</ColumnCapacity>
      {children && children}
    </WhapperHeaderColumn>
  );
};

export default HeaderColumn;
