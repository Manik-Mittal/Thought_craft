import React, { useState, useEffect } from "react";
import axios from "axios";
import Blogcard from "../components/Blogcard";
import Grid from '@mui/material/Grid';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  //get blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/blog/all-blogs");
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    // <div>
    //   <div className="banner">

    //   </div>
    //   <div style={{
    //     display: 'flex',
    //     width: '90vw',
    //     flexWrap: 'wrap',
    //     justifyContent: 'center', // Optional: Adjust as needed
    //     gap: '20px', // Optional: Adjust spacing between cards
    //   }}>

    //     <Grid container spacing={20}>
    //       {blogs &&
    //         blogs.map((blog) => (
    //           <Grid key={blog?._id} item xs={10} sm={6} md={4} lg={3}>
    //             <Blogcard
    //               id={blog?._id}
    //               title={blog?.title}
    //               description={blog?.description}
    //               image={blog?.image}
    //               username={blog?.user?.username}
    //               time={blog.createdAt}
    //             />
    //           </Grid>
    //         ))
    //       }
    //     </Grid>
    //   </div>

    // </div >

    <>

      <div className="banner">

      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4" style={{ margin: '20px' }}>
        {blogs.map((blog) => (
          <Col key={blog._id} xs={12} sm={6} md={4} className="d-flex justify-content-center">
            <Blogcard
              id={blog?._id}
              title={blog?.title}
              description={blog?.description}
              image={blog?.image}
              username={blog?.user?.username}
              time={blog.createdAt}
            />
          </Col>
        ))}
      </div>
    </>
  );

};


export default Blogs;