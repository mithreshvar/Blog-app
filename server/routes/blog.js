const express = require("express");
const { getBlogs, createBlog, deleteBlog, updateBlog, getMyBlog, getBlog } = require("../controllers/blogController");
const requireAuth = require('../middleware/requireAuth')

const recordRoutes = express.Router();

// GET all Blogs
recordRoutes.get('/', getBlogs);

// GET a Blog
recordRoutes.get('/:id', getBlog);

// require auth for all workout routes
recordRoutes.use(requireAuth)

// GET My Blog
recordRoutes.get('/my', getMyBlog);

// POST a new Blog
recordRoutes.post('/', createBlog);

// DELETE a Blog
recordRoutes.delete('/:id', deleteBlog);

// UPDATE a Blog
recordRoutes.patch('/:id', updateBlog);

module.exports = recordRoutes;