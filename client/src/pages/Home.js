import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Blogcard from '../components/Blogcard'
const Home = () => {
    const [blogs, setBlogs] = useState([])

    const getAllBlogs = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/api/v1/blog/all-blogs')
            if (data && data.success) {
                console.log(data);
                setBlogs(data.blogs)
            }

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getAllBlogs();
    }, [])
    return (
        <>
            {
                blogs.map((blog) => (
                    console.log(blog),

                    <Blogcard
                        key={blog.id} // Add a unique key prop if possible
                        title={blog.title}
                        description={blog.description}
                        image={blog.image}
                        username={blog.user.username}
                        // console.log()
                        time={blog.createdAt}
                      
                    />
                ))
            }
        </>
    );
};

export default Home;