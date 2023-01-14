import { useAppContext } from '../hooks/appContext';

const Error = () => {
    const { alertText } = useAppContext();

    return (
        <div className='container error pad-sm radius-sm full'>
            <p>{alertText}</p>
        </div>
    );
};

export default Error;
