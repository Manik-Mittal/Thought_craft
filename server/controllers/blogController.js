const blogModel = require('../model/blogModel')
const userModel = require('../model/userModel')


//get all blogs
exports.getAllBlogsController = async (req, res) => {
    try {
        const blogs = await blogModel.find({}).populate('user')
        if (!blogs) {
            return res.status(405).send({
                success: false,
                message: "enter all the fields"
            })

        }
        return res.status(200).send({
            success: true,
            blogCount: blogs.length,
            message: "Blog diplayed",
            blogs
        })


    }
    catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "error in call back function"
        })
    }


}
//create blogs
exports.createBlogController = async (req, res) => {
    try {
        const { title, description, image, user } = req.body;
        //validation
        if (!title || !description || !image || !user) {
            return res.status(400).send({
                success: false,
                message: "Please Provide ALl Fields",
            });
        }
        const exisitingUser = await userModel.findById(user);
        //validaton
        if (!exisitingUser) {
            return res.status(404).send({
                success: false,
                message: "unable to find user",
            });
        }

        const newBlog = new blogModel({ title, description, image, user });


        await newBlog.save({});
        exisitingUser.blogs.push(newBlog);
        await exisitingUser.save({});
        await newBlog.save();
        return res.status(201).send({
            success: true,
            message: "Blog Created!",
            newBlog,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "Error WHile Creting blog",
            error,
        });
    }
};

//get single blog
exports.getSingleBlogController = async (req, res) => {
    try {
        const { id } = req.params

        const blog = await blogModel.findById(id);
        if (!blog) {
            return res.status(405).send({
                success: false,
                message: "blog not found"
            })

        }
        return res.status(200).send({
            success: true,
            message: "Blog fetched",
            blog

        })

    }
    catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "error in call back function"
        })
    }

}


//delete blog
exports.deleteBlogController = async (req, res) => {
    try {
        const { id } = req.params
        const blog = await blogModel.findByIdAndDelete(id).populate("user");
        await blog.user.pull(blog);
        await blog.user.save();

        return res.status(200).send({
            success: true,
            message: "deleted"
        })

    }
    catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "error in call back function"
        })
    }

}
//update blog
exports.updateBlogController = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description, image } = req.body
        const blog = await blogModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
        return res.status(200).send({
            success: true,
            message: "Blog created",
            blog
        })

    }
    catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "error in call back function"
        })
    }

}

//user blog controller

exports.userBlogController = async (req, res) => {
    try {
        const { id } = req.params
        const userBlog = await userModel.findById(id).populate("blogs")
        if (!userBlog) {
            return res.status(405).send({
                success: false,
                message: "blog not found with this id"
            })
        }
        return res.status(200).send({
            success: true,
            message: "user blog",
            userBlog
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "error in call back function",
            error
        })


    }

}