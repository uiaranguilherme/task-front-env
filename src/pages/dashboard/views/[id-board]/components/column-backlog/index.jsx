import React from "react";
import { WhapperColumn } from "../column/styles";
import HeaderColumn from "../column/components/header-column";
import { IoIosArrowBack } from "react-icons/io";
import { WhapperList, ButtonAddNewTask } from "./styles";
import { ButtonIcon } from "../../../../../../components/button/styles";
import { FcPlus } from "react-icons/fc";

const ColumnBacklog = () => {
  return (
    <WhapperColumn>
      <HeaderColumn desableBackground={true} columnTitle="Backlog">
        <ButtonIcon title="Fechar Backlog">
          <IoIosArrowBack />
        </ButtonIcon>
      </HeaderColumn>
      <WhapperList>
        <ButtonAddNewTask>
          <FcPlus />
          Adicionar Tarefa
        </ButtonAddNewTask>
      </WhapperList>
    </WhapperColumn>
  );
};

export default ColumnBacklog;
