import React from "react"
import { WhapperHeaderRow, RowName, RowCapacity } from './styles'

const HeaderRow = (props) => {
    return(
        <WhapperHeaderRow>
            <RowName title={props.fila.name}>
                {props.fila.name}
            </RowName>
            <RowCapacity>
                10/{props.fila.limit}
            </RowCapacity>
        </WhapperHeaderRow>
    )
}

export default HeaderRow