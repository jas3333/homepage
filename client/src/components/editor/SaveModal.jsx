import axios from 'axios';
import { useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

const SaveModal = ({ setShowModal, text }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('linux');

    const handleSubmit = async () => {};

    return (
        <div className='overlay'>
            <div className='container-col modal w-500 h-300 bg-dark-grey pad-lg shadow radius-md'>
                <AiOutlineClose className='auto-right icon red pointer' onClick={() => setShowModal(false)} />
                <form className='container-col' onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title:</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        className='input-text h-40'
                        placeholder='Enter title'
                    />
                    <label htmlFor='' className='mg-top-md'>
                        Category:
                    </label>
                    <select className='select ' onChange={(event) => setCategory(event.target.value)}>
                        <option value='linux'>Linux</option>
                        <option value='programming'>Programming</option>
                    </select>

                    <div className='container auto'>
                        <button className='btn btn-h-md mg-right-md mg-top-lg'>Save</button>
                        <button className='btn btn-h-md mg-top-lg' onClick={() => setShowModal(false)}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SaveModal;
