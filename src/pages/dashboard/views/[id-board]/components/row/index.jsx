import React from "react"
import { WhapperRow } from "./styles";
import HeaderRow from './components/header-row'
import CardTasks from "../../../components/card-tasks";

const Row = (props) => {
    return(
        <WhapperRow>
            <HeaderRow {...props}/>
            {props.tasks.map((task, i) => <CardTasks {...task} key={i}/>)}
        </WhapperRow>
    )
}

export default Row;