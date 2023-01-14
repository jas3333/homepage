import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAppContext } from '../hooks/appContext';

import Error from './../components/Error';

const intialValues = {
    username: '',
    password: '',
};
const Register = () => {
    const { displayAlert, showAlert } = useAppContext();
    const [values, setValues] = useState(intialValues);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);

        if (!values.username || !values.password) {
            displayAlert();
            return;
        }
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    return (
        <div className='container mg-top-vlg auto'>
            <form className='container-col w-300 h-450 border pad-vlg radius-md' onSubmit={handleSubmit}>
                <h1 className='text-center'>Register</h1>
                <div className='underline-full'></div>
                {showAlert && <Error />}
                <label htmlFor='username' className='mg-top-md'>
                    Username:
                </label>
                <input
                    type='text'
                    name='username'
                    className='input-text pad-sm h-40'
                    placeholder='Enter username'
                    value={values.name}
                    onChange={handleChange}
                />
                <label htmlFor='password' className='mg-top-md'>
                    Password:
                </label>
                <input
                    type='password'
                    name='password'
                    className='input-text pad-sm h-40'
                    placeholder='Enter password'
                    value={values.name}
                    onChange={handleChange}
                />
                <button className='btn h-50 full mg-top-lg'>Register</button>
                <div className='container content-center mg-top-md'>
                    <Link className='' to='/login'>
                        Already a member? Login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
