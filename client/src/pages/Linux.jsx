import { useEffect, useState } from 'react';
import axios from 'axios';

import Blog from '../components/blogs/Blog';

const Linux = () => {
    const [blogs, setBlogs] = useState([]);

    const getBlog = async () => {
        try {
            const response = await axios.get('http://localhost:5012/api/v1/blog');
            const blogsList = response.data;
            setBlogs(blogsList.filter((blog) => blog.category === 'linux'));
            console.log(blogs);
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <div className='container mg-top-vlg auto'>
            {blogs.map((blog) => (
                <Blog {...blog} />
            ))}
        </div>
    );
};

export default Linux;
