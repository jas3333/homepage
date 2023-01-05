import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import useAuth from '../hooks/useAuth';

const Clubhouse = () => {
    const navigate = useNavigate();
    const [showSidebar, setShowSidebar] = useState(false);
    const { isAdmin, isUser } = useAuth();

    useEffect(() => {
        if (!isAdmin && !isUser) {
            navigate('/login');
        }
    }, [navigate, isAdmin, isUser]);

    return (
        <div className='container mg-top-vlg auto'>
            <h1>Clubhouse</h1>
        </div>
    );
};

export default Clubhouse;
