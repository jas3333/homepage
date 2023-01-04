import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TextArea from '../components/editor/TextArea';
import MarkDownDisplay from '../components/editor/MarkDownDisplay';
import SaveModal from '../components/editor/SaveModal';
import useAuth from '../hooks/useAuth';

const Editor = () => {
    const { isAdmin } = useAuth();
    const navigate = useNavigate();

    const [text, setText] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!isAdmin) {
            navigate('/');
        }
    });

    return (
        <div className='container mg-top-vlg auto'>
            <TextArea text={text} setText={setText} />
            <MarkDownDisplay text={text} />

            {showModal && <SaveModal setShowModal={setShowModal} text={text} />}

            <div className='container pad-lg border h-100 align mg-left-vlg radius-md'>
                <button className='btn btn-h-md' onClick={() => setShowModal(!showModal)}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default Editor;
