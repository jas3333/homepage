const createBlog = async (req, res) => {
    res.status(200).json({ message: 'Blog created' });
};

const getBlogs = async (req, res) => {
    res.status(200).json({ message: 'Blogs retrieved' });
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
