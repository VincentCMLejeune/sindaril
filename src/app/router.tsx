import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home'
import Sandbox from '../pages/sandbox/Sandbox'

export const router = createBrowserRouter([
    {
        path: '/', element: <Home />
    },
    {
        path: '/sandbox', element: <Sandbox />
    }
],
    { basename: '/' });
