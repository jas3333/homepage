import { useState } from 'react';

import TextArea from '../components/editor/TextArea';
import MarkDownDisplay from '../components/editor/MarkDownDisplay';
import SaveModal from '../components/editor/SaveModal';

const Editor = () => {
    const [text, setText] = useState('');
    const [showModal, setShowModal] = useState(false);

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
