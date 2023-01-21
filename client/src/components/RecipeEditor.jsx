const RecipeEditor = () => {
    return (
        <div className='container-col mg-top-vlg w-800 border auto pad-lg '>
            <h1 className='text-center '>RecipeEditor</h1>
            <div className='underline-full'></div>
            <form className='container-col mg-top-md auto'>
                <label htmlFor='ingredient'>Enter Ingredients:</label>
                <input type='text' className='input-text pad-sm w-400 h-40 ' placeholder='Enter ingredient' />
            </form>
        </div>
    );
};

export default RecipeEditor;
