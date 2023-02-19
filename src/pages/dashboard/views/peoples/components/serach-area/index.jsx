import React from "react"
import { WhapperShearch } from './styles'
import Input from "../../../../../../components/input"
import Button from "../../../../../../components/button"

const ShearchArea = () => {
    return(
        <WhapperShearch>
            <Input
                style={{width: '20rem'}}
                placeholder="Pesquisar Pessoas ?"
            />
            <Button
                variant="contained"
                style={{padding: '0rem 0.8rem', height: '2.2rem'}}
            >
                Adicionar Pessoas
            </Button>
        </WhapperShearch>
    )
}

export default ShearchArea