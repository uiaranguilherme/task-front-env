import React from "react"
import Dialog from '../../../../../../components/dialog'
import Grid from '../../../../../../components/grid'
import { Title, Fieldset } from './styles'
import Input from "../../../../../../components/input"
import Button from "../../../../../../components/button"

const styleCard = {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'width': '35%',
    'background-color': '#ffff'
}

const styleGrid = {
    'align-items': 'center',
    'padding': '5px'
}

const styleGridButtom = {
    'display': 'flex',
    'padding': '10px 0',
    'justify-content': 'flex-end',
}

const styleButtomCancel = {
    'padding': '4px 7px',
    'margin-right': '10px',
    'border-radius': '20px'
}

const styleButtomAdd = {
    'padding': '4px 7px',
    'border-radius': '20px'
}

const ModalNewPeople = ({open}) => {
    return(
        <Dialog open={open}
             cardProps={{
                style: styleCard
             }}
        >
            <Grid
                variant="container"
            >
                <Grid style={styleGrid} item coll={12}>
                    <Title>
                        Adicionar novo Colaborador do Projeto
                    </Title>
                </Grid>
                <Grid item coll={12}>
                    <Input
                        fullWidth
                        placeholder="Nome*"
                    />
                </Grid>
                <Grid item coll={12}>
                    <Input
                        fullWidth
                        placeholder="Email*"
                    />
                </Grid>
                <Grid item coll={12}>
                    <Fieldset>
                        <legend style={{padding: '10px'}}>Área de Atuação:</legend>
                        <Grid
                            variant="container"
                        >
                            <Grid style={styleGrid} item coll={12}>
                                <input id="desenvolvedor" name="desenvolvedor" type="checkbox"  />
                                <label for="desenvolvedor" style={styleGrid}>Desenvolvedor</label>
                            </Grid>
                            <Grid style={styleGrid} item coll={12}>
                                <input id="teck-lead" name="teck-lead" type="checkbox"  />
                                <label for="teck-lead" style={styleGrid}>Teck Lead</label>
                            </Grid>
                            <Grid style={styleGrid} item coll={12}>
                                <input id="product-owner" name="product-owner" type="checkbox"  />
                                <label for="product-owner" style={styleGrid}>Product Owner</label>
                            </Grid>
                        </Grid>
                    </Fieldset>
                </Grid>
                <Grid style={styleGridButtom} item coll={12}>
                    <Button 
                        variant="outlined"
                        style={styleButtomCancel}
                    >
                        Cancelar
                    </Button>
                    <Button 
                        variant="contained"
                        style={styleButtomAdd}
                    >
                        Cadastrar
                    </Button>
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default ModalNewPeople