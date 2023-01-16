import { useAppContext } from '../hooks/appContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { user } = useAppContext();
    if (!user) {
        return <Navigate to='/login' />;
    }

    return (
        <>
            <Outlet />
        </>
    );
};

export default ProtectedRoute;
