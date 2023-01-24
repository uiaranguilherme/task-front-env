import React from "react"
import logo from '../../../../assets/logo.png'
import Input from '../../../../components/input'
import Button from "../../../../components/button"
import Page from "../../../../components/page-whapper"
import { useNavigate } from 'react-router-dom'
import { LogoArea, Form, ButtonsArea, AreaRestart, AreaLogin } from './styles'

const LoginPage = () => {
    const navigate = useNavigate();

    return(
        <Page title="Login">
            <LogoArea>
                <img src={logo} alt="logo empresa" srcset={logo} />
                <h4>Jura Board</h4>
            </LogoArea>
            <Form>
                <Input placeholder="Login" type='text' name="login"/>
                <Input placeholder="Password" type='password' name="password"/>
            </Form>
            <ButtonsArea>
                <AreaRestart>
                    <Button
                        style={{width: '8rem', height: '2rem'}}
                        variant='text'
                        onClick={() => navigate('/recuperar-senha')}
                    >
                        Recuperar Senha
                    </Button>
                    <Button
                        style={{width: '8rem', height: '2rem'}}
                        variant='text'
                        onClick={() => navigate('/cadastro')}
                    >
                        Cadastrar-se
                    </Button>
                </AreaRestart>
                <AreaLogin>
                    <Button
                        style={{width: '10rem', height: '2rem'}}
                        variant='contained'
                        onClick={() => navigate('/dashboard')}
                    >
                        Acessar
                    </Button>
                </AreaLogin>
            </ButtonsArea>
        </Page>
    )
}

export default LoginPage