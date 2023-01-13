import { FaFolder, FaLightbulb, FaPen, FaRegUser } from 'react-icons/fa';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../hooks/context';

const Sidebar = () => {
    const { user } = useGlobalContext();
    return (
        <div className='container-col mg-top-vlg border pad-lg radius-md mg-left-md h-400 w-300'>
            <h2>Hello, {user.username}</h2>
            <div className='underline-full'></div>
            <div className='container align '>
                <FaFolder className='mg-right-sm' />
                <Link className='nav-links'>Files</Link>
            </div>

            {user.role === 'user ' && (
                <div className='container align '>
                    <FaLightbulb className='mg-right-sm' />
                    <Link className='nav-links'>Request Features</Link>
                </div>
            )}
            {user.role === 'admin' && (
                <div className='container align '>
                    <FaRegUser className='mg-right-sm' />
                    <Link className='nav-links' to='/createUser'>
                        Create User
                    </Link>
                </div>
            )}

            {user.role === 'admin' && (
                <div className='container align '>
                    <AiOutlineUserDelete className='mg-right-sm' />
                    <Link className='nav-links' to='/admin'>
                        Admin
                    </Link>
                </div>
            )}
            {user.role === 'admin' && (
                <div className='container align '>
                    <FaPen className='mg-right-sm' />
                    <Link className='nav-links' to='/editor'>
                        Create Article
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
