import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar space'>
            <div className='container'>
                <Link to='/'></Link>
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

                <Link className='nav-links mg-right-md' to='/login'>
                    Login
                </Link>
                <Link className='nav-links mg-right-md' to='/clubhouse'>
                    Clubhouse
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
