import { AppBar, Toolbar, Typography, styled, Box, Button } from "@mui/material";
import React from 'react'
import { Link } from 'react-router-dom'
import App from "../App";
const Component = styled(Box)`
    box-shadow:0 2px 0 2px rgb(0 0 0 /20%)

`


const Container = styled(Toolbar)`
 
   

`
const Header = () => {
    return (
        <AppBar position="sticky">
            <Container>
                <Typography variant='h4'>
                    Thoughts Craft
                </Typography>
                <Box display={'flex'} marginLeft={'auto'}>
                    <Button href="#text-buttons" sx={{ margin: 1, color: "white" }} LinkComponent={Link} to='/login'>Home</Button>
                    <Button href="#text-buttons" sx={{ margin: 1, color: "white" }} LinkComponent={Link} to='/home'>About</Button>
                    <Button href="#text-buttons" sx={{ margin: 1, color: "white" }} LinkComponent={Link} to='/register'>Services</Button>
                </Box>


            </Container>
        </AppBar>
    )
}

export default Header