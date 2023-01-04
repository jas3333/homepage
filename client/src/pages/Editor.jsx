import axios from 'axios';
import { useState } from 'react';

import TextArea from '../components/editor/TextArea';
import MarkDownDisplay from '../components/editor/MarkDownDisplay';

const Editor = () => {
    const [text, setText] = useState('');

    const onClick = () => {
        console.log(text);
    };

    return (
        <div className='container mg-top-vlg auto'>
            <TextArea text={text} setText={setText} />
            <MarkDownDisplay text={text} />
            <div className='container pad-lg border h-100 align mg-left-vlg radius-md'>
                <button className='btn btn-h-md' onClick={onClick}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default Editor;
