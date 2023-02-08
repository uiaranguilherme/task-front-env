import React from "react"
import { WhapperColumn } from "../column/styles";
import HeaderColumn from "../column/components/header-column";
import { IoIosArrowBack } from "react-icons/io";
import { WhapperList } from '../column-backlog/styles'
import { ButtonIcon } from "../../../../../../components/button/styles";

const ColumnFinish = () => {
    return(
        <WhapperColumn>
            <HeaderColumn
                desableBackground={true}
                columnTitle="Finalizados"
            >
                <ButtonIcon
                    title="Fechar Backlog"
                >
                    <IoIosArrowBack/>
                </ButtonIcon>
            </HeaderColumn>
            <WhapperList>
                
            </WhapperList>
        </WhapperColumn>
    )
}
export default ColumnFinish