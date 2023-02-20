import React from "react"
import Dialog from "../../../../../../components/dialog"
import Input from '../../../../../../components/input'
import Grid from "../../../../../../components/grid"
import Button from "../../../../../../components/button"
import { TitleModalCreate, FooterModalCreate, Box } from './styles'
import BoxSolid from "./components/box-solid"

const styled = {
    card: {
        'width': '60%',
        'background-color': '#FFF',
        'justify-content': 'start'
    },
    gridContainer: {
        'padding-top': '10px',
        'padding-bottom': '10px'
    },
    button: {
        'height': '2rem',
        'width': '6rem',
        'margin': '0 5px',
        'border-radius': '20px'
    },
    itemButtonAdicionarEmail: {
        'display' : 'flex',
        'justify-content': 'center',
        'align-items': 'center'
    },
    inputEmail : {
        'margin': '5px'
    }
}

const ModalCreateProject = ({open, onChangeModal}) => {
    return(
        <Dialog 
            open={open}
            cardProps={{
                style: styled.card
            }}
        >
            <TitleModalCreate>
                Criação de Projeto 
            </TitleModalCreate>
            <Grid style={styled.gridContainer} variant='container' spaces={2}>
                <Grid item coll={8}>
                    <Input fullWidth name="nome-projeto" placeholder="Nome do Projeto*"/>
                </Grid>
                <Grid item coll={4}>
                    <Input fullWidth name="empresa-projeto" placeholder="Empresa*"/>
                </Grid>
                <Grid item coll={6}>
                    <Input fullWidth name="gestor-projeto" placeholder="Gestor do Projeto*"/>
                </Grid>
                <Grid item coll={3}>
                    <Input fullWidth name="cnpj-projeto" placeholder="CNPJ*"/>
                </Grid>
                <Grid item coll={3}>
                    <Input type="date" fullWidth name="data-inicio-projeto" placeholder="Data de Inicio*"/>
                </Grid>
            </Grid>
            <Grid variant='container'>
                <Grid item coll={12}>
                    <BoxSolid title="Adicionar Colaboradores" >
                        <Box>
                            <Input style={styled.inputEmail} type="text" fullWidth name="email-colaborador" placeholder="E-mail*"/>
                            <Button style={styled.button} variant="contained">Adicionar</Button>
                        </Box>
                        
                    </BoxSolid>
                </Grid>
            </Grid>
            <FooterModalCreate>
                <Button style={styled.button} variant="outlined" onClick={onChangeModal}>Cancelar</Button>
                <Button style={styled.button} variant="contained">Salvar</Button>
            </FooterModalCreate>
        </Dialog>
    )
}

export default ModalCreateProject