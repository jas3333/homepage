import { useEffect, useState } from 'react';
import { useGlobalContext } from '../hooks/context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

import User from '../components/admin/User';

const Admin = () => {
    const { isAdmin } = useAuth();
    const { user } = useGlobalContext();

    const [userList, setUserList] = useState([]);

    const navigate = useNavigate();

    const getUsers = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const response = await axios.get('/api/v1/users/', config);
            const users = response.data.allUsers;
            setUserList(users.filter((user) => user.role !== 'admin'));
        } catch (error) {
            console.log(error.response);
            navigate('/');
        }
    };

    useEffect(() => {
        if (isAdmin) {
            getUsers();
        } else {
            navigate('/');
        }
    }, [isAdmin, navigate]);

    return (
        <div className='container-col mg-top-vlg auto border pad-lg radius-md w-700'>
            <h1>Welcome admin {user.username}</h1>
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
