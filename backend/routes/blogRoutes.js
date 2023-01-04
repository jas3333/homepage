import express from 'express';
import { createBlog, getBlogs, updateBlog, deleteBlog } from '../controllers/blogController.js';

const router = express.Router();

router.post('/', createBlog).get('/', getBlogs).patch('/:id', updateBlog).delete('/:id', deleteBlog);

export default router;
