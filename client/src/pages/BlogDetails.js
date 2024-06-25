import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { url } from '../url';
const BlogDetails = () => {
    const [blog, setBlog] = useState(null);
    const params = useParams();
    const [error1, setError] = useState('')

    const getBlog = async () => {
        try {
            const id = params.id;
            const response = await axios.get(`${url}/api/v1/blog/all-blogs${id}`);
            setBlog(response.data.blog);

        } catch (error) {

            setError(error);
        }
    };

    useEffect(() => {
        getBlog();
    }, []);

    if (!blog) return <div>Loading ...</div>;

    return (
        <div className="container mt-5">
            <div className="card shadow-lg" style={{ borderRadius: '15px' }}>
                <div className="card-header  text-center text-white" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', backgroundColor: '#254336' }}>
                    <h2>{blog.title}</h2>
                </div>
                <div className="card-body">
                    {blog.image && (
                        <img
                            src={blog.image}
                            className="card-img-top mb-3"
                            alt="Blog"
                            style={{ width: '100%', borderRadius: '15px', maxHeight: '70vh' }}
                        />
                    )}
                    <h5 className="card-title">{blog.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Published on: {new Date(blog.createdAt).toLocaleDateString()}</h6>
                    <p className="card-text" style={{ paddingTop: '30px', paddingBottom: '30px' }}>{blog.description}</p>
                </div>
                <div className="card-footer text-muted" style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}>
                    Last updated on: {new Date(blog.updatedAt).toLocaleDateString()}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
