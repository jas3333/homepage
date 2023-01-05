import { useState } from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai';

import RemoveUserModal from './RemoveUserModal';

const User = ({ _id, username, role, setUserList, userList }) => {
    const [showModal, setShowModal] = useState(false);

    const removeUserProps = {
        _id,
        username,
        setShowModal,
        userList,
        setUserList,
    };

    return (
        <div className='container'>
            <h2>{username}</h2>
            {showModal && <RemoveUserModal {...removeUserProps} />}
            <div className='container auto-right align'>
                <h2>{role}</h2>
                <AiOutlineUserDelete className='icon red mg-left-sm pointer' onClick={() => setShowModal(true)} />
            </div>
        </div>
    );
};

export default User;
