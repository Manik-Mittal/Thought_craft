import React, { useState, useEffect } from "react";
import axios from "axios";
import Blogcard from "../components/Blogcard";
const Userblogs = () => {
    const [blogs, setBlogs] = useState([]);

    //get user blogs
    const getUserBlogs = async () => {
        try {
            const id = JSON.parse(localStorage.getItem("auth"));
            const id1 = id.user._id;
            console.log(id1)
            const { data } = await axios.get(`http://localhost:8080/api/v1/blog/user-blog/${id1}`);
            if (data.success) {
                setBlogs(data.userBlog.blogs);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserBlogs();
    }, []);
    console.log(blogs);
    return (
        <div>
            {blogs && blogs.length > 0 ? (
                blogs.map((blog) => (
                    <Blogcard
                        id={blog._id}
                        isUser={true}
                        title={blog.title}
                        description={blog.description}
                        image={blog.image}
                        username={blog.user.username}
                        time={blog.createdAt}
                    />
                ))
            ) : (
                <h1>You Havent Created a blog</h1>
            )}
        </div>
    );
};
export default Userblogs