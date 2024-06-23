import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function Blogcard({
    title,
    description,
    image,
    username,
    time,
    id,
    isUser,
}) {


    return (
        <Card sx={{
            width: '30%', margin: 'auto', mt: 2,
            padding: 2, boxShadow: "5px 5px 10px #ccc"
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {username}
                    </Avatar>
                }
                title={username}
                subheader={time}
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="image"
            />
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    Title : {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description : {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>

        </Card>
    );
}
