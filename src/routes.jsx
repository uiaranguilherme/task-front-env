import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import { BoardPerId, Projetos } from './pages/dashboard'
import LazySuspense from './components/lazy-suspense'

const routes = createBrowserRouter([
    {
        path: '/*',
        element: <Login/>
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
    {
        path: '/teste',
        element: <LazySuspense/>
    },
])

const Routes = () => <RouterProvider router={routes} />

export default Routes