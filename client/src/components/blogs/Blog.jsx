import React from 'react';

const Blog = ({ title, content, category }) => {
    return (
        <div className='container-col'>
            <h1>{title}</h1>
            <h2>{category}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Blog;
