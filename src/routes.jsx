import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import Cadastro from './pages/cadastro'
import RecuperarSenha from './pages/recuperar-senha'
import { BoardPerId, Projetos } from './pages/dashboard'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/cadastro',
        element: <Cadastro/>
    },
    {
        path: '/recuperar-senha',
        element: <RecuperarSenha/>
    },
    {
        path: '/dashboard',
        children: [
            {
                index: true,
                element: <Projetos/>
            },
            {
                path: ':id',
                element: <BoardPerId/>
            },
        ]
    },
])

const Routes = () => <RouterProvider router={routes} />

export default Routes