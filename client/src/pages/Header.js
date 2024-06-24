import { AppBar, Toolbar, Typography, styled, Box, Button } from "@mui/material";
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import App from "../App";
import { useAuth } from "../context/auth";

const Component = styled(Box)`
    box-shadow:0 2px 0 2px rgb(0 0 0 /20%)

`


const Container = styled(Toolbar)`
 
   

`

const Header = () => {
    const handleLogout = () => {
        localStorage.clear()
        setAuth(null)

    }
    const [auth, setAuth] = useAuth();


    console.log(auth);
    return (
        <AppBar position="sticky" color="success" sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#254336' }}>
            <Container >
                <Typography variant='h4'>
                    Thoughts Craft
                </Typography>

                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    {!auth ? (
                        <Button sx={{ margin: 1, color: "white" }} component={Link} to='/blogs'>Home</Button>
                    ) : (
                        <>
                            <Button sx={{ margin: 1, color: "white" }} component={Link} to='/blogs'>Home</Button>
                            <Button sx={{ margin: 1, color: "white" }} component={Link} to='/myblogs'>Your Blogs</Button>
                            <Button sx={{ margin: 1, color: "white" }} component={Link} to='/create'>Create Blog</Button>
                        </>
                    )}



                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {!auth ? (
                        <Button sx={{ margin: 1, color: "black", backgroundColor: "#F6DCAC" }} variant="contained" component={Link} to='/login'>Login</Button>
                    ) : (
                        <Button sx={{ margin: 1, color: "black", backgroundColor: "#F6DCAC" }} variant="contained" onClick={handleLogout}>Logout</Button>
                    )}
                </Box>
            </Container>

        </AppBar>
    )
}

export default Header