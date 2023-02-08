import React, { lazy, Suspense } from "react"
import { ContainerLoginPage } from './styles'
import { Outlet, Route, Routes } from 'react-router-dom'
import LazySuspense from "../../components/lazy-suspense"

const Cadastro = lazy(() => import ("./view/cadastro"))
const RecuperarSenha = lazy(() => import("./view/recuperar-senha"))
const LoginPage = lazy(() => import("./view/login"))

const LoginRoutes = () => {
    return(
        <Suspense fallback={<LazySuspense/>}>
            <Routes>
                <Route element={<Login/>}>
                    <Route index element={<LoginPage/>}/>
                    <Route path="cadastro" element={<Cadastro/>}/>
                    <Route path="recuperar-senha" element={<RecuperarSenha/>}/>
                </Route>
            </Routes>
        </Suspense>
    )
}

const Login = () => {
    return(
        <ContainerLoginPage>
            <Outlet/>
        </ContainerLoginPage>
    )
}

export default LoginRoutes