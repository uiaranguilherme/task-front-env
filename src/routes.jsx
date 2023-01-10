import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import Cadastro from './pages/cadastro'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/cadastro',
        element: <Cadastro/>
    },
])

const Routes = () => <RouterProvider router={routes} />

export default Routes