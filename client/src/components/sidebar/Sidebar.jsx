import React from 'react';
import { FaFolder, FaCookie, FaWpforms, FaNewspaper, FaLightbulb } from 'react-icons/fa';
import { BsMenuAppFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    return (
        <div
            className={`${showSidebar ? 'sidebar' : 'sidebar sidebar-offscreen'}`}
            // onMouseOver={() => setShowSidebar(true)}
            // onMouseOut={() => setShowSidebar(false)}
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
            <div className='container align '>
                <FaLightbulb className='mg-right-sm' />
                <Link className='nav-links'>Request Features</Link>
            </div>
        </div>
    );
};

export default Sidebar;