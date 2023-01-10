import React from "react"
import logo from '../../assets/logo.png'
import Input from '../../components/input'
import Button from "../../components/button"
import Card from "../../components/card/styles"
import { useNavigate } from 'react-router-dom'
import { ContainerLoginPage, LogoArea, Form, ButtonsArea, AreaRestart, AreaLogin } from './styles'

const Login = () => {
    const navigate = useNavigate();

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
            </Card>
        </ContainerLoginPage>
    )
}

export default Login