const express = require('express')

const { getAllBlogsController, getSingleBlogController, deleteBlogController,
    updateBlogController, createBlogController, userBlogController } = require('../controllers/blogController')

const router = express.Router();


//routes

//all blogs
router.get('/all-blogs', getAllBlogsController)

// // create blog
router.post('/create-blog', createBlogController)

// //update blog

router.put('/update-blog:id', updateBlogController)

// //get single blog
router.get('/all-blogs:id', getSingleBlogController)

// //delete blog
router.delete('/delete-blog:id', deleteBlogController)

//get user blogs
router.get("/user-blog/:id", userBlogController)

module.exports = router