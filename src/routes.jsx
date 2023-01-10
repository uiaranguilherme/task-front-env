import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import Cadastro from './pages/cadastro'
import RecuperarSenha from './pages/recuperar-senha'

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
])

const Routes = () => <RouterProvider router={routes} />

export default Routes