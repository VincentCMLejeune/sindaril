import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './provider';
import { router } from './router';
import { Mobile } from '../components/mobile/Mobile';

export function App() {
    return (
        <AppProvider>
            <Mobile />
            <RouterProvider router={router} />
        </AppProvider>
    );
}