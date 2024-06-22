import React, { useState } from 'react';
import { Box, TextField, Button, styled } from '@mui/material';

const Component = styled(Box)`
    width: 400px;
    padding: 4vh;
    box-sizing: border-box;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 20vh;
`;

const Wrapper = styled(Box)`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
        margin-top: 10px;
    }
    & > .first {
        margin-top: 45px;
        width: 160%;
        height: 48px;
    }
    > button {
        margin-top: 10px;
        width: 160%;
        box-shadow: 2px 1px 2px 1px rgb(0 0 0 / 20%);
    }
`;

const Login = () => {
    const [status, setStatus] = useState(true);
    const submithandler = () => {
        setStatus(!status);
        
    };


    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    return (
        <Component>
            <img src={imageURL} alt="Logo" />
            {status ? (
                <Wrapper>
                    <TextField variant="standard" label="Enter Name" />
                    <TextField variant="standard" label="Enter Password" />
                    <Button className="first" variant="contained">Login</Button>
                    <p style={{ textAlign: 'center' }}>OR</p>
                    <Button onClick={submithandler} variant="text">Create an account</Button>
                </Wrapper>
            ) : (
                <Wrapper>
                    <TextField variant="standard" label="Enter Name" />
                    <TextField variant="standard" label="Enter Username" />
                    <TextField variant="standard" label="Enter Password" />
                    <Button className="first" variant="contained">Sign Up</Button>
                    <p style={{ textAlign: 'center' }}>OR</p>
                    <Button onClick={submithandler} variant="text">Login</Button>
                </Wrapper>
            )}
        </Component>
    );
};

export default Login;
