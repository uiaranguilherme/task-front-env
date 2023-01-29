import Button from '../../../../components/button'
import Card from '../../../../components/card/styles'
import Input from '../../../../components/input'
import Page from '../../../../components/page-whapper'
import { Form, ButtonArea, CardWhapper } from './styles'

const Cadastro = () => {

    return(
        <Page title="Cadastro">
            <Card style={{width: '20rem',}}>
                <CardWhapper> 
                        <h4 style={{paddingTop: '10px', fontSize: '1.2rem'}}>Cadastrar-se</h4>
                        <Form>
                            <Input name="nome" placeholder="Nome"/>
                            <Input name="sobrenome" placeholder="Sobrenome"/>
                            <Input name="email" placeholder="E-mail"/>
                            <Input name="password" placeholder="Senha"/>
                            <Input name="confirm-password" placeholder="Confirme a Senha"/>
                        </Form>
                        <ButtonArea>
                            <Button style={{width: '10rem', height: '2rem'}} variant="contained">Registrar</Button>
                        </ButtonArea>
                </CardWhapper>
            </Card>
        </Page>
    )
}

export default Cadastro