import React from 'react'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import { Kanban, Sprint } from './pages/dashboard'
import { Projetos } from './pages/dashboard'
import BoardPerId from './pages/dashboard/views/[id-board]'
import Login from './pages/login'
import Pessoas from './pages/dashboard/views/peoples'
import NotFound from './pages/not-found'

const routes = createBrowserRouter([
    {
        path: '/*',
        element: <Login/>
    },
    {
        path: 'dashboard',
        children: [
            {
                index: true,
                element: <Projetos/>
            },
            {
                path: 'colaboradores',
                element: <Pessoas/>
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