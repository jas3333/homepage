import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/appContext';

import LoginForm from '../components/login/LoginForm';

const intialValues = {
    username: '',
    password: '',
};

const Login = () => {
    const { displayAlert, loginUser, user } = useAppContext();
    const [values, setValues] = useState(intialValues);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!values.username || !values.password) {
            displayAlert();
            return;
        }
        loginUser(values);
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        if (user) {
            navigate('/clubhouse');
        }
    }, [user, navigate]);

    const loginFormProps = {
        values,
        handleChange,
        handleSubmit,
    };

    return (
        <div className='container mg-top-vlg auto'>
            <LoginForm {...loginFormProps} />
        </div>
    );
};

export default Login;
