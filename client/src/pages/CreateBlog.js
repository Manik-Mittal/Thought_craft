import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { TextareaAutosize } from '@mui/material';

const CreateBlog = () => {

    const id1 = JSON.parse(localStorage.getItem("auth"));
    const id = id1.user._id;

    console.log(id);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        image: "",
    });
    // input change
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    //form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:8080/api/v1/blog/create-blog", {
                title: inputs.title,
                description: inputs.description,
                image: inputs.image,
                user: id,
            });
            if (data?.success) {
                toast.success("Blog Created");
                navigate("/myblogs");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box
                    width={"50%"}
                    border={3}
                    borderRadius={10}
                    padding={3}
                    margin="auto"
                    boxShadow={"10px 10px 20px #ccc"}
                    display="flex"
                    flexDirection={"column"}
                    marginTop="30px"
                >
                    <Typography
                        variant="h2"
                        textAlign={"center"}
                        fontWeight="bold"
                        padding={3}
                        color="gray"
                    >
                        Create A Post
                    </Typography>
                    <InputLabel
                        sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
                    >
                        Title
                    </InputLabel>
                    <TextField
                        name="title"
                        value={inputs.title}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    <InputLabel
                        sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
                    >
                        Description
                    </InputLabel>
                    <TextareaAutosize
                        name="description"
                        value={inputs.description}
                        onChange={handleChange}
                        aria-label="minimum height"
                        minRows={15}
                        placeholder="Write your blog content here..."
                        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                        required
                    />
                    <InputLabel
                        sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
                    >
                        Image URL
                    </InputLabel>
                    <TextField
                        name="image"
                        value={inputs.image}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    <Button type="submit" color="primary" variant="contained" sx={{ borderRadius: '30px', marginTop: "20px" }}>
                        POST
                    </Button>
                </Box>
            </form >
        </>
    );
};

export default CreateBlog;