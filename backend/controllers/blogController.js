import Blog from './../models/blogModel.js';

const createBlog = async (req, res) => {
    const { title, user, text, category } = req.body;
    console.log(req.body);

    const newBlog = await Blog.create({ user: user, title: title, content: text, category: category });
    console.log(newBlog);

    if (!newBlog) {
        res.status(400);
        throw new Error('Invalid');
    }

    res.status(200).json(newBlog);
};

const getBlogs = async (req, res) => {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
};

const getBlog = async (req, res) => {
    res.status(200).json({ message: 'Blog retrieved' });
};

const updateBlog = async (req, res) => {
    res.status(200).json({ message: 'Blog updated' });
};

const deleteBlog = async (req, res) => {
    res.status(200).json({ message: 'Blog deleted' });
};

export { createBlog, getBlogs, getBlog, updateBlog, deleteBlog };
