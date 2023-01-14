import { useState } from 'react';

import User from '../components/admin/User';

const Admin = () => {
    const [userList, setUserList] = useState([]);

    return (
        <div className='container-col mg-top-vlg auto border pad-lg radius-md w-700'>
            <div className='underline-full'></div>
            <div className='container-col'>
                {userList.map((user) => (
                    <User {...user} key={user._id} setUserList={setUserList} userList={userList} />
                ))}
            </div>
        </div>
    );
};

export default Admin;
