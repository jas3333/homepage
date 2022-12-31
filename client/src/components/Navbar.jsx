import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../hooks/context';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const { user, setUser } = useGlobalContext();
    const { isAdmin, isUser } = useAuth();

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('key');
        setUser('');
        navigate('/');
    };

    return (
        <nav className='navbar space'>
            <div className='container'>
                <Link to='/'>
                    <h1>Hello {user.username}</h1>
                </Link>
            </div>
            <div className='container'>
                <Link className='nav-links mg-right-md' to='/apps'>
                    Apps
                </Link>
                <Link className='nav-links mg-right-md' to='/linux'>
                    Linux
                </Link>
                <Link className='nav-links mg-right-md' to='/programming'>
                    Programming
                </Link>
                {isAdmin && (
                    <Link className='nav-links mg-right-md' to='/admin'>
                        Admin
                    </Link>
                )}

                {isAdmin && (
                    <Link className='nav-links mg-right-md' to='/createUser'>
                        Create User
                    </Link>
                )}

                {!isAdmin && !isUser && (
                    <Link className='nav-links mg-right-md' to='/login'>
                        Login
                    </Link>
                )}
                {(isAdmin || isUser) && (
                    <Link className='nav-links mg-right-md' to='/clubhouse'>
                        Clubhouse
                    </Link>
                )}
                {(isAdmin || isUser) && (
                    <Link className='nav-links mg-right-md' onClick={logout}>
                        Logout
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
