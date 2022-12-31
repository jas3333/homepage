import { useEffect, useState } from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { useGlobalContext } from '../hooks/context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const Admin = () => {
    const { user } = useGlobalContext();
    const [userList, setUserList] = useState([]);
    const { isAdmin } = useAuth();
    const navigate = useNavigate();

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5012/api/v1/users/');
            setUserList(response.data.allUsers);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!isAdmin) {
            navigate('/');
        }
    });

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className='container-col mg-top-vlg auto border pad-lg radius-md fifty'>
            <h1>Welcome admin {user.username}</h1>
            <div className='underline-full'></div>
            <div className='container-col'>
                {userList &&
                    userList.map((user, index) => {
                        const { username, role } = user;
                        return (
                            <div className='container full space mg-top-sm ' key={index}>
                                <h3>{username}</h3>
                                <div className='container align'>
                                    <h3>{role}</h3>
                                    <AiOutlineUserDelete className='icon red mg-left-sm pointer' />
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Admin;
