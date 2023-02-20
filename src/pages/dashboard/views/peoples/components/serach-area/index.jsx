import React from "react"
import { WhapperShearch } from './styles'
import Input from "../../../../../../components/input"
import Button from "../../../../../../components/button"

const styleButtom = {
    'padding': '0rem 0.8rem', 
    'height': '2.2rem',
    'border-radius': '20px'
}

const ShearchArea = () => {
    return(
        <WhapperShearch>
            <Input
                style={{width: '60%', height: '2.2rem', 'border-color': "rgba(1, 1, 1, 0.2)"}}
                placeholder="Pesquisar Colaborador ?"
            />
            <Button
                variant="contained"
                style={styleButtom}
            >
                Adicionar Colaborador
            </Button>
        </WhapperShearch>
    )
}

export default ShearchArea