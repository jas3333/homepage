import axios from 'axios';
import { FaFolder, FaLightbulb, FaDoorOpen } from 'react-icons/fa';
import { AiOutlineLogout, AiFillBook } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../hooks/appContext';

const Sidebar = () => {
    const { user, logoutUser } = useAppContext();
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const response = await axios.get('/api/v1/users/logout');
            logoutUser();
        } catch (error) {
            console.log(error);
        }
        navigate('/login');
    };
    return (
        <div className='container-col mg-top-vlg border pad-lg radius-md mg-left-md h-400 w-300'>
            <h2>Hello, {user}</h2>
            <div className='underline-full'></div>
            <div className='container align mg-top-md '>
                <FaFolder className='mg-right-sm' />
                <Link className='nav-links'>Files</Link>
            </div>
            <div className='container align '>
                <FaLightbulb className='mg-right-sm' />
                <Link className='nav-links'>Request Features</Link>
            </div>
            <div className='container align '>
                <AiFillBook className='mg-right-sm' />
                <Link className='nav-links' to='/recipeEditor'>
                    Recipes
                </Link>
            </div>
            <div className='container align '>
                <AiOutlineLogout className='mg-right-sm' />
                <Link className='nav-links' onClick={logout}>
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
