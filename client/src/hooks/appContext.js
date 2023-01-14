import axios from 'axios';
import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: null,
    _id: null,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = () => {
        dispatch({ type: 'SHOW_ALERT' });
        clearAlert();
    };

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: 'CLEAR_ALERT' });
        }, 3000);
    };

    const registerUser = async (currentUser) => {
        dispatch({ type: 'REGISTER_USER' });
        try {
            const response = await axios.post('/api/v1/users', currentUser);
            console.log(currentUser);
            dispatch({ type: 'REGISTER_USER_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'REGISTER_USER_ERROR', payload: error.response.data.message });
            clearAlert();
        }
    };

    const loginUser = async (currentUser) => {
        dispatch({ type: 'LOGIN_USER' });
        try {
            const response = await axios.post('/api/v1/users/login', currentUser);
            console.log(response.data);
            dispatch({ type: 'LOGIN_USER_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'LOGIN_USER_ERROR', payload: error.response.data.message });
            clearAlert();
        }
    };

    const contextValues = { ...state, displayAlert, clearAlert, registerUser, loginUser };

    return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
