import React from "react"
import { Outlet } from "react-router-dom"
import Layout from "../../../../layout"
import { WhapperPageBoardId } from './styles'

const BoardPerId = () => {
    return(
        <Layout
            visibleSubHeader={false}
        >
            <WhapperPageBoardId>
                <Outlet/>
            </WhapperPageBoardId>
        </Layout>
    )
}

export default BoardPerId