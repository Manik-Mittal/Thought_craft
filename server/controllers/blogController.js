const blogModel =require('../model/blogModel')


//get all blogs
exports.getAllBlogsController = async(req,res)=>{
    try{
        const blogs=await blogModel.find({})
            if(!blogs){
                return res.status(405).send({
                    success:false,
                    message:"enter all the fields"
                })

            }
            return res.status(200).send({
                success:true,
                blogCount:blogs.length,
                message:"Blog diplayed",
                blogs
            })


    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"error in call back function"
        })
    }


}
//create blogs
exports.createBlogController = async(req,res)=>{
    try{

        const {title,description,image}=req.body
        if(!title||!description||!image){
            return res.status(405).send({
                success:false,
                message:"enter all the fields"
            })
        }
        const newblog=new blogModel({title,description,image})
        await newblog.save()
        return res.status(200).send({
            success:true,
            message:"Blog created"
        })
        
    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"error in call back function"
        })
    }

}
//get single blog
exports.getSingleBlogController = async(req,res)=>{
    try{
        const {id}=req.params
    
        const blog = await blogModel.findById(id);
        if(!blog){
            return res.status(405).send({
                success:false,
                message:"blog not found"
            })

        }
        return res.status(200).send({
            success:true,
            message:"Blog fetched",
            blog
      
        })

    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"error in call back function"
        })
    }

}
//delete blog
exports.deleteBlogController = async(req,res)=>{
    try{
        const {id}=req.params
        await blogModel.findByIdAndDelete(id);
        return res.status(200).send({
            success:true,
            message:"deleted"
        })

    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"error in call back function"
        })
    }

}
//update blog
exports.updateBlogController= async(req,res)=>{
    try{
        const {id}=req.params
        const {title,description,image}=req.body
        const blog =await blogModel.findByIdAndUpdate(id,{...req.body},{new:true})
        return res.status(200).send({
            success:true,
            message:"Blog created",
            blog
        })

    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"error in call back function"
        })
    }

}