import { useContext, createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const localData = localStorage.getItem('key');
    const userData = JSON.parse(localData) || { username: '', token: '' };

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
