import React, { useState, useEffect } from "react";
import axios from "axios";
import Blogcard from "../components/Blogcard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { url } from "../url";
const Userblogs = () => {
    const [blogs, setBlogs] = useState([]);

    //get user blogs
    const getUserBlogs = async () => {
        try {
            const id = JSON.parse(localStorage.getItem("auth"));
            const id1 = id.user._id;
            console.log(id1)
            const { data } = await axios.get(`${url}/api/v1/blog/user-blog/${id1}`);
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

        <Container style={{ margin: 'auto', marginTop: '30px' }}>
            {blogs && blogs.length > 0 ? (
                <Row className="justify-content-center">
                    {blogs.map((blog) => (
                        <Col key={blog._id} xs={12} sm={7} md={4} className="d-flex justify-content-center mb-4">
                            <Blogcard
                                id={blog._id}
                                isUser={true}
                                title={blog.title}
                                description={blog.description}
                                image={blog.image}
                                username={blog.user.username}
                                time={blog.createdAt}
                            />
                        </Col>
                    ))}
                </Row>
            ) : (
                <h1>You Haven't Created a Blog</h1>
            )}
        </Container >
    );
}
export default Userblogs