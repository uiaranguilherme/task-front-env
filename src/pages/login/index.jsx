import React from "react"
import { ContainerLoginPage, LogoArea, Form, ButtonsArea } from './styles'
import logo from '../../assets/logo.png'
import Input from '../../components/input'
import Button from "../../components/button"
import Card from "../../components/card/styles"

const Login = () => {
    return(
        <ContainerLoginPage>
            <Card>
                <LogoArea>
                    <img src={logo} alt="logo empresa" srcset={logo} />
                    <h4>Jura Board</h4>
                </LogoArea>
                <Form>
                    <Input placeholder="Login" type='text' name="login"/>
                    <Input placeholder="Password" type='password' name="password"/>
                </Form>
                <ButtonsArea>
                    <Button style={{width: '8rem', height: '2rem'}} variant='text'>Recuperar Senha</Button>
                    <Button style={{width: '8rem', height: '2rem'}} variant='text'>Cadastrar-se</Button>
                    <Button style={{width: '10rem', height: '2rem'}} variant='contained'>Acessar</Button>
                </ButtonsArea>
            </Card>
        </ContainerLoginPage>
    )
}

export default Login