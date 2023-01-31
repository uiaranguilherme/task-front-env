import Layout from "../../../../layout"
import Row from "./components/row"
import { WhapperPageBoardId } from './styles'
import { dados } from '../mock/data'



export const BoardPerId = () => {
    return(
        <Layout
            visibleSubHeader={false}
        >
            <WhapperPageBoardId>
                {dados.map((fila, index) => <Row {...fila}/>)}
            </WhapperPageBoardId>
        </Layout>
    )
}