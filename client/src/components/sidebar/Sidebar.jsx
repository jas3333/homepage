import { FaFolder, FaCookie, FaWpforms, FaNewspaper, FaLightbulb, FaCog, FaPen, FaRegUser } from 'react-icons/fa';
import { BsMenuAppFill } from 'react-icons/bs';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    const { isAdmin, isUser } = useAuth();
    return (
        <div
            className={`${showSidebar ? 'sidebar' : 'sidebar sidebar-offscreen'}`}
            onMouseOver={() => setShowSidebar(true)}
            onMouseOut={() => setShowSidebar(false)}
        >
            <h1>Sidebar</h1>
            <div className='underline-full'></div>
            <div className='container align '>
                <FaFolder className='mg-right-sm' />
                <Link className='nav-links'>Files</Link>
            </div>

            <div className='container align '>
                <FaCookie className='mg-right-sm' />
                <Link className='nav-links'>Recipes</Link>
            </div>
            <div className='container align '>
                <BsMenuAppFill className='mg-right-sm' />
                <Link className='nav-links'>Apps</Link>
            </div>
            <div className='container align '>
                <FaWpforms className='mg-right-sm' />
                <Link className='nav-links'>Posts</Link>
            </div>
            <div className='container align '>
                <FaNewspaper className='mg-right-sm' />
                <Link className='nav-links'>News</Link>
            </div>

            {isUser && (
                <div className='container align '>
                    <FaLightbulb className='mg-right-sm' />
                    <Link className='nav-links'>Request Features</Link>
                </div>
            )}
            {isAdmin && (
                <div className='container align '>
                    <FaRegUser className='mg-right-sm' />
                    <Link className='nav-links' to='/createUser'>
                        Create User
                    </Link>
                </div>
            )}

            {isAdmin && (
                <div className='container align '>
                    <AiOutlineUserDelete className='mg-right-sm' />
                    <Link className='nav-links' to='/admin'>
                        Remove Users
                    </Link>
                </div>
            )}
            {isAdmin && (
                <div className='container align '>
                    <FaPen className='mg-right-sm' />
                    <Link className='nav-links' to='/editor'>
                        Create Article
                    </Link>
                </div>
            )}
            <div className='container align '>
                <FaCog className='mg-right-sm' />
                <Link className='nav-links'>Settings</Link>
            </div>
        </div>
    );
};

export default Sidebar;
