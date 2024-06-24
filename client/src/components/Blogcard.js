// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import MoreVertIcon from '@mui/icons-material/MoreVert';



// export default function Blogcard({
//     title,
//     description,
//     image,
//     username,
//     time,
//     id,
//     isUser,
// }) {


//     return (
//         <Card sx={{
//             width: '30%', margin: 'auto', mt: 2,
//             padding: 2, boxShadow: "5px 5px 10px #ccc"
//         }}>
//             <CardHeader
//                 avatar={
//                     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                         {username}
//                     </Avatar>
//                 }
//                 title={username}
//                 subheader={time}
//             />
//             <CardMedia
//                 component="img"
//                 height="194"
//                 image={image}
//                 alt="image"
//             />
//             <CardContent>
//                 <Typography variant="h6" color="text.secondary">
//                     Title : {title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     Description : {description}
//                 </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//                 <IconButton aria-label="add to favorites">
//                     <FavoriteIcon />
//                 </IconButton>
//                 <IconButton aria-label="share">
//                     <ShareIcon />
//                 </IconButton>

//             </CardActions>

//         </Card>
//     );
// }
//)))+++++++++++++++++++++++++++
// import * as React from 'react';
// import { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';

// export default function Blogcard({
//     title,
//     description,
//     image,
//     username, 
//     time,
//     id,
//     isUser,
// }) {
//     const [readMore, setReadMore] = useState(false);

//     const toggleReadMore = () => {
//         setReadMore(!readMore);
//     };

//     const wordCount = description.split(" ").length;
//     const truncatedDescription = wordCount > 50 ? description.split(" ").slice(0, 50).join(" ") + "..." : description;

//     return (

//         <Card sx={{
//             width: '30%', margin: 'auto', mt: 2,
//             padding: 2, boxShadow: "5px 5px 10px #ccc"
//         }}>
//             <CardHeader
//                 avatar={
//                     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                         {username}
//                     </Avatar>
//                 }
//                 title={username}
//                 subheader={time}
//             />
//             <CardMedia
//                 component="img"
//                 height="194"
//                 image={image}
//                 alt="image"
//                 sx={{
//                     objectFit: 'cover',
//                 }}
//             />
//             <CardContent>
//                 <Typography variant="h6" color="text.secondary">
//                     Title : {title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     Description : {readMore ? description : truncatedDescription}
//                     {wordCount > 50 && (
//                         <span onClick={toggleReadMore} style={{ color: 'blue', cursor: 'pointer' }}>
//                             {readMore ? " Show Less" : " Read More"}
//                         </span>
//                     )}
//                 </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//                 <IconButton aria-label="add to favorites">
//                     <FavoriteIcon />
//                 </IconButton>
//                 <IconButton aria-label="share">
//                     <ShareIcon />
//                 </IconButton>
//             </CardActions>
//         </Card>
//     );
// }
//+++++++++++++++++++

// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import Grid from '@mui/material/Grid';

// export default function Blogcard({
//     title,
//     description,
//     image,
//     username,
//     time,
//     id,
//     isUser,
// }) {
//     const [readMore, setReadMore] = useState(false);

//     const toggleReadMore = () => {
//         setReadMore(!readMore);
//     };

//     const wordCount = description.split(" ").length;
//     const truncatedDescription = wordCount > 50 ? description.split(" ").slice(0, 50).join(" ") + "..." : description;

//     return (
//         <Card sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//             height: '100%',
//             minWidth: '400px',
//             minHeight: 300,
//             boxShadow: '5px 5px 10px #ccc',
//             margin: '70px',
//         }}>
//             <CardHeader
//                 avatar={
//                     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                         {username}
//                     </Avatar>
//                 }
//                 title={username}
//                 subheader={time}
//             />
//             <CardMedia
//                 component="img"
//                 height="194"
//                 image={image}
//                 alt="image"
//                 sx={{
//                     objectFit: 'cover',
//                 }}
//             />
//             <CardContent sx={{ flex: '1 0 auto' }}>
//                 <Typography variant="h6" color="text.secondary" gutterBottom>
//                     Title: {title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     Description: {readMore ? description : truncatedDescription}
//                     {wordCount > 50 && (
//                         <span onClick={toggleReadMore} style={{ color: 'blue', cursor: 'pointer' }}>
//                             {readMore ? " Show Less" : " Read More"}
//                         </span>
//                     )}
//                 </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//                 <IconButton aria-label="add to favorites">
//                     <FavoriteIcon />
//                 </IconButton>
//                 <IconButton aria-label="share">
//                     <ShareIcon />
//                 </IconButton>
//             </CardActions>
//         </Card>
//     );
// }

// export function BlogList({ blogData }) {
//     return (
//         <Grid container spacing={3}>
//             {blogData.map((blog) => (
//                 <Grid key={blog.id} item xs={12} sm={6} md={4} lg={4}>
//                     <Blogcard
//                         id={blog.id}
//                         title={blog.title}
//                         description={blog.description}
//                         image={blog.image}
//                         username={blog.username}
//                         time={blog.time}
//                     />
//                 </Grid>
//             ))}
//         </Grid>
//     );
// }
// import React from 'react';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import Grid from '@mui/material/Grid';

// export default function Blogcard({
//     title,
//     description,
//     image,
//     username,
//     time,
// }) {
//     const [readMore, setReadMore] = React.useState(false);

//     const toggleReadMore = () => {
//         setReadMore(!readMore);
//     };

//     const wordCount = description.split(" ").length;
//     const truncatedDescription = wordCount > 50 ? `${description.split(" ").slice(0, 50).join(" ")}...` : description;

//     return (
//         <Card sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//             height: '100%',
//             boxShadow: '5px 5px 10px #ccc',
//             margin: '20px',
//             borderRadius: '8px', // Add rounded corners
//             width: '400px', // Set fixed width for the card
//         }}>
//             <CardHeader
//                 avatar={
//                     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                         {username} {/* Display first letter of username */}
//                     </Avatar>
//                 }
//                 title={username}
//                 subheader={time}
//             />
//             <CardMedia
//                 component="img"
//                 height="194"
//                 image={image}
//                 alt="image"
//                 sx={{
//                     objectFit: 'cover',
//                 }}
//             />
//             <CardContent sx={{ flex: '1 0 auto' }}>
//                 <Typography variant="h6" color="text.secondary" gutterBottom>
//                     {title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     {readMore ? description : truncatedDescription}
//                     {wordCount > 50 && (
//                         <span onClick={toggleReadMore} style={{ color: 'blue', cursor: 'pointer' }}>
//                             {readMore ? " Show Less" : " Read More"}
//                         </span>
//                     )}
//                 </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//                 <IconButton aria-label="add to favorites">
//                     <FavoriteIcon />
//                 </IconButton>
//                 <IconButton aria-label="share">
//                     <ShareIcon />
//                 </IconButton>
//             </CardActions>
//         </Card>
//     );
// }
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Blogcard({
    title,
    description,
    image,
    username,
    time,
}) {
    const [readMore, setReadMore] = React.useState(false);

    const toggleReadMore = () => {
        setReadMore(!readMore);
    };

    const wordCount = description.split(" ").length;
    const truncatedDescription = wordCount > 50 ? `${description.split(" ").slice(0, 50).join(" ")}...` : description;

    return (
        <Card className="mb-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '20px', boxShadow: '5px 5px 10px #ccc' }}>
            <Card.Header>
                <div className="d-flex align-items-center">
                    <Badge bg="secondary" className="me-2">{username}</Badge>
                    <small className="text-muted">{username}</small>
                    <small className="text-muted ms-auto">{new Date(time).toLocaleString()}</small>
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
