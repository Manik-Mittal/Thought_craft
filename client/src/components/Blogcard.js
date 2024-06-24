
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Blogcard({
    title,
    description,
    image,
    username,
    time,
    id,
    isUser
}) {

    const [readMore, setReadMore] = React.useState(false);

    const toggleReadMore = () => {
        setReadMore(!readMore);
    };

    const wordCount = description.split(" ").length;
    const truncatedDescription = wordCount > 50 ? `${description.split(" ").slice(0, 50).join(" ")}...` : description;
    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`http://localhost:8080/api/v1/blog/delete-blog/${id}`);
            if (data?.success) {
                toast.success("Deleted Successfully")
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/blog-details/${id}`);
    };

    return (
        <Card className="mb-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '20px', boxShadow: '5px 5px 10px #ccc' }}>
            <Card.Header>
                <div className="d-flex align-items-center">
                    <Badge bg="success" className="me-2">{username}</Badge>
                    <small className="text-muted">{username}</small>
                    <small className="text-muted ms-auto">{new Date(time).toLocaleString()}</small>
                    {isUser && (
                        <Box display={"flex"}>

                            <IconButton onClick={handleDelete}>
                                <DeleteIcon color="error" />
                            </IconButton>
                        </Box>
                    )}
                </div>

            </Card.Header>

            <Card.Img variant="top" src={image} style={{ height: '194px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Text className="flex-grow-1" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {readMore ? description : truncatedDescription}
                </Card.Text>
                {wordCount > 50 && (
                    <Button variant="link" className="text-primary p-0 align-self-start" onClick={toggleReadMore}>
                        {readMore ? " Show Less" : " Read More"}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}
