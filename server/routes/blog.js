const express = require("express");
const { getBlogs, createBlog, deleteBlog, updateBlog, getMyBlog, getBlog } = require("../controllers/blogController");
const requireAuth = require('../middleware/requireAuth')

const recordRoutes = express.Router();

// require auth for all workout routes
recordRoutes.use(requireAuth)

// GET all PatientProfiles
recordRoutes.get('/', getBlogs);

// GET My PatientProfile
recordRoutes.get('/my', getMyBlog);

// GET a PatientProfile
recordRoutes.get('/:id', getBlog);

// POST a new PatientProfile
recordRoutes.post('/', createBlog);

// DELETE a PatientProfile
recordRoutes.delete('/:id', deleteBlog);

// UPDATE a PatientProfile
recordRoutes.patch('/:id', updateBlog);

module.exports = recordRoutes;