const TextArea = ({ text, setText }) => {
    return (
        <div className='container '>
            <form>
                <textarea
                    rows='40'
                    cols='80'
                    value={text}
                    className='bg-dark-grey fc-light font-sm text-area'
                    onChange={(event) => setText(event.target.value)}
                ></textarea>
            </form>
        </div>
    );
};

export default TextArea;
