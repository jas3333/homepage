import { useContext, createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const userData = { _id: '', username: '', token: '' };
    const [user, setUser] = useState(userData);

    const contextValues = {
        user,
        setUser,
    };
    return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
