import axios from 'axios';
import { useState } from 'react';
import { useGlobalContext } from '../hooks/context';
import { useNavigate } from 'react-router-dom';

import Error from './../components/Error';

const Login = () => {
    const navigate = useNavigate();
    const { user, setUser } = useGlobalContext();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userPack = { username, password };

        try {
            const response = await axios.post('http://localhost:5012/api/v1/users/login', userPack);
            const { token } = response.data;
            setUser({ _id: response.data._id, username: response.data.username, token });
            localStorage.setItem('key', JSON.stringify({ username, token }));
            navigate('/clubhouse');
        } catch (error) {
            console.log(error.response);
            setErrorMessage(error.response.data.message);
            setShowError(true);
        }
    };
    return (
        <div className='container-col mg-top-vlg auto border pad-lg radius-md w-350 h-500'>
            <h1 className='text-center'>Login</h1>
            <div className='underline-full'></div>
            <form className='container-col ' onSubmit={handleSubmit}>
                <p className='mg-top-lg'>Username:</p>
                <input
                    type='text'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className='input-text-md h-50'
                    placeholder='Enter username'
                />
                <p className='mg-top-md'>Password:</p>
                <input
                    type='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className='input-text-md h-50'
                    placeholder='Enter password'
                />
                <button className='btn full mg-top-lg mg-bot-md h-60'>Login</button>
            </form>
            {showError && <Error errorMessage={errorMessage} setShowError={setShowError} />}
        </div>
    );
};

export default Login;
