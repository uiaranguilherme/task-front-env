import React from "react"
import LoginPage from "./view/login"
import Cadastro from "./view/cadastro"
import { ContainerLoginPage } from './styles'
import Card from "../../components/card/styles"
import RecuperarSenha from "./view/recuperar-senha"
import { Outlet, Route, Routes } from 'react-router-dom'

const LoginRoutes = () => {
    return(
        <Routes>
            <Route element={<Login/>}>
                <Route index element={<LoginPage/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="recuperar-senha" element={<RecuperarSenha/>}/>
            </Route>
        </Routes>
    )
}

const Login = () => {
    return(
        <ContainerLoginPage>
            <Card>
                <Outlet/>
            </Card>
        </ContainerLoginPage>
    )
}

export default LoginRoutes