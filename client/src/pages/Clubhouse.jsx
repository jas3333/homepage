import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/appContext';

const Clubhouse = () => {
    const { user } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <div className='container mg-top-vlg auto'>
            <h1>Clubhouse</h1>
        </div>
    );
};

export default Clubhouse;
