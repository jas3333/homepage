import axios from 'axios';
import { useState } from 'react';
import { useGlobalContext } from '../hooks/context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { user, setUser } = useGlobalContext();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userPack = { username, password };

        try {
            const response = await axios.post('http://localhost:5012/api/v1/users/login', userPack);
            const { token } = response.data;
            setUser({ token });
            localStorage.setItem('key', JSON.stringify({ username, token }));
            navigate('/clubhouse');
        } catch (error) {
            console.log(error.response);
        }
    };
    return (
        <div className='container-col mg-top-vlg auto border pad-lg radius-md size-sm'>
            <h1 className='text-center'>Login</h1>
            <div className='underline-full'></div>
            <form className='container-col ' onSubmit={handleSubmit}>
                <p className='mg-top-sm'>Username:</p>
                <input
                    type='text'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className='input-text-md '
                    placeholder='Enter username'
                />
                <p className='mg-top-sm'>Password:</p>
                <input
                    type='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className='input-text-md '
                    placeholder='Enter password'
                />
                <button className='btn full mg-top-md mg-bot-md btn-h-md'>Login</button>
            </form>
        </div>
    );
};

export default Login;
