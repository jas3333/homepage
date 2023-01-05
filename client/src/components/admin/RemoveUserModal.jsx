import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import { useGlobalContext } from '../../hooks/context';

const RemoveUserModal = ({ setShowModal, username, _id, userList, setUserList }) => {
    const { user } = useGlobalContext();
    const removeUser = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };
            const response = await axios.delete(`http://localhost:5012/api/v1/users/${_id}`, config);
            console.log(response.data);
        } catch (error) {
            console.log(error.response);
        }
        setUserList(userList.filter((user) => user._id !== _id));
        setShowModal(false);
    };

    return (
        <div className='overlay'>
            <div className='container-col modal bg-dark-grey w-500 h-300 pad-lg text-center radius-md shadow border'>
                <div className='container auto-right'>
                    <AiOutlineClose className='icon red pointer ' onClick={() => setShowModal(false)} />
                </div>
                <h1 className='mg-top-lg'>Are you sure you want to remove {username}?</h1>
                <div className='container auto mg-top-lg '>
                    <button className='btn h-40 mg-right-md' onClick={removeUser}>
                        Remove
                    </button>
                    <button className='btn h-40' onClick={() => setShowModal(false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RemoveUserModal;
