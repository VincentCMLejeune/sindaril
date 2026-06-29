import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home'
import Menu from '../pages/menu/Menu'
import Sandbox from '../pages/sandbox/Sandbox'

export const router = createBrowserRouter([
    {
        path: '/', element: <Home />
    },
    {
        path: '/menu', element: <Menu />
    },
    {
        path: '/sandbox', element: <Sandbox />
    }
],
    { basename: '/sindaril/' });
