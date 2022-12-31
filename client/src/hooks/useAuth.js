import { useGlobalContext } from './context';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
    const { user } = useGlobalContext();
    const token = user.token;

    let isAdmin = false;
    let isUser = false;

    if (token) {
        const decoded = jwtDecode(token);
        decoded.role === 'admin' ? (isAdmin = true) : (isAdmin = false);
        decoded.role === 'user' ? (isUser = true) : (isUser = false);
    }

    return { isAdmin, isUser };
};

export default useAuth;
