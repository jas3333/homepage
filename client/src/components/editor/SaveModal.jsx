import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const SaveModal = ({ setShowModal }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title);
        setShowModal(false);
    };

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
                    <select className='select mg-top-md '>
                        <option value='linux'>Linux</option>
                        <option value='programming'>Programming</option>
                    </select>
                    <button className='btn btn-h-md auto mg-top-lg'>Save</button>
                </form>
            </div>
        </div>
    );
};

export default SaveModal;
