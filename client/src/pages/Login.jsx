const Login = () => {
    return (
        <div className='container-col mg-top-vlg auto border pad-lg radius-md size-sm'>
            <h1 className='text-center'>Login</h1>
            <div className='underline-full'></div>
            <form className='container-col '>
                <p className='mg-top-sm'>Username:</p>
                <input type='text' className='input-text-md ' placeholder='Enter username' />
                <p className='mg-top-sm'>Password:</p>
                <input type='text' className='input-text-md ' placeholder='Enter username' />
                <button className='btn full mg-top-md mg-bot-md btn-h-md'>Login</button>
            </form>
        </div>
    );
};

export default Login;
