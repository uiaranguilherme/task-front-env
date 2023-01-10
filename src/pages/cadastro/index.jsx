import Button from '../../components/button'
import Card from '../../components/card/styles'
import Input from '../../components/input'
import { ContainerCadastroPage, Form, ButtonArea } from './styles'

const Cadastro = () => {
    return(
        <ContainerCadastroPage>
            <Card>
                <h4 style={{paddingTop: '10px', fontSize: '1.2rem'}}>Cadastrar-se</h4>
                <Form>
                    <Input style={{margin: '5px 0'}} name="name" placeholder="Primeiro Nome"/>
                    <Input style={{margin: '5px 0'}} name="lastName" placeholder="Ultimo Nome"/>
                    <Input style={{margin: '5px 0'}} name="email" placeholder="E-mail"/>
                    <Input style={{margin: '5px 0'}} name="password" placeholder="Senha"/>
                    <Input style={{margin: '5px 0'}} name="confirm-password" placeholder="Confirme a Senha"/>
                </Form>
                <ButtonArea>
                    <Button style={{width: '10rem', height: '2rem'}} variant="contained">Cadastrar</Button>
                </ButtonArea>
            </Card>
        </ContainerCadastroPage>
    )
}

export default Cadastro