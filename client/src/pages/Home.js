// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Blogcard from "../components/Blogcard";
// import { Grid } from "@mui/material";
// import BannerWithVideo from "./BannerWithVideo";

// const Userblogs = () => {


//     const [blogs, setBlogs] = useState([]);

//     // Get user blogs
//     const getUserBlogs = async () => {
//         try {
//             const id = JSON.parse(localStorage.getItem("auth"));
//             const id1 = id.user._id;
//             const { data } = await axios.get(`http://localhost:8080/api/v1/blog/all-blogs`);
//             if (data.success) {

//                 setBlogs(data.userBlog.blogs);

//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         getUserBlogs();
//     }, []);

//     return (
//         <>
//             <div className="banner">
//                 <BannerWithVideo />

//             </div>
//             <div className=''>
//                 <div className='blog-content'>
//                     <Grid container spacing={3}>
//                         {blogs && blogs.length > 0 ? (
//                             blogs.map((blogs) => (
//                                 <Blogcard
//                                     key={blogs._id} // Add a unique key prop
//                                     title={blogs.title}
//                                     description={blogs.description}
//                                     image={blogs.image}
//                                     username={blogs.user.username}
//                                     time={blogs.createdAt}
//                                 />
//                             ))
//                         ) : (
//                             <h1>You haven't created a blog</h1>
//                         )}
//                     </Grid>
//                 </div>
//             </div>
//         </>
//     );

// };

// export default Userblogs;
