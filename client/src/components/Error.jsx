import React, { useEffect } from 'react';

const Error = ({ errorMessage, setShowError }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowError(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [setShowError]);

    return (
        <div className='container error pad-lg radius-md'>
            <h3>{errorMessage}</h3>
        </div>
    );
};

export default Error;
