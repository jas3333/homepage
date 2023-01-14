import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../hooks/appContext';

import Error from './../components/Error';

const intialValues = {
    username: '',
    password: '',
};

const Login = () => {
    const { showAlert, displayAlert } = useAppContext();
    const [values, setValues] = useState(intialValues);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!values.username || !values.password) {
            displayAlert();
            return;
        }

        console.log(values);
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <div className='container mg-top-vlg auto'>
            <form className='container-col w-300 h-450 border pad-vlg radius-md' onSubmit={handleSubmit}>
                <h1 className='text-center'>Login</h1>
                <div className='underline-full'></div>
                {showAlert && <Error />}
                <label htmlFor='username' className='mg-top-md'>
                    Username:
                </label>
                <input
                    type='text'
                    value={values.name}
                    name='username'
                    className='input-text pad-sm h-40'
                    placeholder='Enter username'
                    onChange={handleChange}
                />
                <label htmlFor='password' className='mg-top-md'>
                    Password:
                </label>
                <input
                    value={values.name}
                    type='password'
                    name='password'
                    className='input-text pad-sm h-40'
                    placeholder='Enter password'
                    onChange={handleChange}
                />
                <button className='btn h-50 full mg-top-lg'>Login</button>
                <Link className='text-center mg-top-md' to='/register'>
                    Not a member? Register
                </Link>
            </form>
        </div>
    );
};

export default Login;
