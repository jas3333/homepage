import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

import Error from './../components/Error';

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { isAdmin } = useAuth();

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        const userPackage = { username, password };
        setUsername('');
        setPassword('');

        try {
            const response = await axios.post('http://localhost:5012/api/v1/users', userPackage);
        } catch (error) {
            console.log(error.response);
            setErrorMessage(error.response.data.message);
            setShowError(true);
        }
    };

    useEffect(() => {
        if (!isAdmin) {
            navigate('/');
        }
    }, [isAdmin, navigate]);

    return (
        <div className='container-col mg-top-vlg auto border pad-vlg radius-md w-400 h-500'>
            <h2 className='text-center'>Create User</h2>
            <div className='underline-full'></div>

            <form className='container-col' onSubmit={onSubmit}>
                <label className='mg-top-lg'>Username:</label>
                <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className='input-text-md h-40'
                    placeholder='Enter username'
                />
                <label className='mg-top-sm'>Password:</label>
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className='input-text-md h-40'
                    placeholder='Enter password'
                />
                <button className='btn full mg-top-lg h-50 '>Create User</button>
            </form>
            {showError && <Error errorMessage={errorMessage} setShowError={setShowError} />}
        </div>
    );
};

export default CreateUser;
