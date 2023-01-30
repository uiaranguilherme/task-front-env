import React from "react"
import { WhapperRow } from "./styles";
import HeaderRow from './components/header-row'

const Row = (props) => {
    return(
        <WhapperRow>
            <HeaderRow {...props}/>
        </WhapperRow>
    )
}

export default Row;