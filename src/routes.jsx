import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import { Kanban, Sprint} from './pages/dashboard'
import Login from './pages/login'
import { Projetos } from './pages/dashboard'
import BoardPerId from './pages/dashboard/views/[id-board]'
import React from 'react'
import NotFound from './pages/not-found'

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
                path: 'board/*',
                element: <BoardPerId/>,
                children: [
                    {
                        path: "kanban",
                        element: <Kanban/>
                    },
                    {
                        path: "sprint",
                        element: <Sprint/>
                    },
                    {
                        path: "*",
                        element: <Navigate to="/dashboard"/>
                    }
                ]
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

const Routes = () => <RouterProvider router={routes} />

export default Routes