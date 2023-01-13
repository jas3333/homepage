import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../hooks/context';

const Navbar = () => {
    const { user, setUser } = useGlobalContext();

    const navigate = useNavigate();

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

                {!user && (
                    <Link className='nav-links mg-right-md' to='/login'>
                        Login
                    </Link>
                )}
                {!user && (
                    <Link className='nav-links mg-right-md' to='/clubhouse'>
                        Clubhouse
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
