import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar space'>
            <div className='container'>
                <Link to='/'>
                    <h1>jas-devs</h1>
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
                <Link className='nav-links mg-right-md' to='/login'>
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
