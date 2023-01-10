import { useState } from 'react'
import Button from '../../components/button'
import Card from '../../components/card/styles'
import Input from '../../components/input'
import Stepper from './components/stepper'
import { AiOutlineArrowRight } from '../../styles/icons'
import { ContainerRecuperarSenhaPage, Form, ButtonArea, CardWhapper } from './styles'

const RecuperarSenha = () => {
    const [step, setStep] = useState("Enviar SMS com Cógigo de Verificação");


    return(
        <ContainerRecuperarSenhaPage>
            <Card>
                <CardWhapper> 
                        <h4 style={{paddingTop: '10px', fontSize: '1.2rem'}}>Recuperar Senha</h4>
                        {/** PRIMEIRA PARTE **/}
                        <Stepper
                            step={"Enviar SMS com Cógigo de Verificação"}
                            currentStep={step}
                        >
                            <Form>
                                <Input style={{margin: '5px 0'}} name="email" placeholder="E-mail*"/>
                                <Input style={{margin: '5px 0'}} name="password" placeholder="Senha mais recente"/>
                            </Form>
                            <ButtonArea>
                                <Button
                                    style={{width: '10rem', height: '2rem'}}
                                    variant="contained"
                                    onClick={() => setStep("Confirmar Código e Cadastrar Nova Senha")}
                                    adornIcon={{
                                        position: 'end',
                                        Icon: <AiOutlineArrowRight/>
                                    }}
                                >
                                    Próximo Passo
                                </Button>
                            </ButtonArea>
                        </Stepper>
                        {/** SEGUNDA PARTE **/}
                        <Stepper
                            step={"Confirmar Código e Cadastrar Nova Senha"}
                            currentStep={step}
                        >
                            <Form>
                                <Input style={{margin: '5px 0'}} name="codigo" placeholder="Código enviado por SMS*"/>
                                <Input style={{margin: '5px 0'}} name="senha" placeholder="Nova Senha*"/>
                                <Input style={{margin: '5px 0'}} name="confirm-senha" placeholder="Confirme a Nova Senha*"/>
                            </Form>
                            <ButtonArea>
                                <Button style={{padding: '0 10px', height: '2rem'}} variant="contained">Registrar Nova Senha</Button>
                            </ButtonArea>
                        </Stepper>
                </CardWhapper>
            </Card>
        </ContainerRecuperarSenhaPage>
    )
}

export default RecuperarSenha