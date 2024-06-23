import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, styled } from '@mui/material';
import { toast } from 'react-hot-toast';
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
    const [email, setEmail] = useState('');
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(true);
    const submithandler = () => {
        setStatus(!status);

    };

    const submitlogin = async () => {
        try {
            const res = await axios.post("http://localhost:8080/api/v1/user/login", {
                username, password
            });
            if (res && res.data.success === true) {
                toast.success("Logged in successfully")
                localStorage.setItem("auth", JSON.stringify(res.data))
            }


        } catch (error) {
            console.log(error);
            toast.error('something went wrong')

        }

    }

    const signupHandler = async () => {
        try {
            const res = await axios.post("http://localhost:8080/api/v1/user/register", {
                username, email, password
            });
            if (res && res.data.success === true) {
                toast.success("Registered successfully")
                localStorage.setItem("auth", JSON.stringify(res.data))

            }


        } catch (error) {
            toast.error("something went wrong");
            


        }


    }


    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    return (
        <Component>
            <img src={imageURL} alt="Logo" />
            {status ? (
                <Wrapper>
                    <TextField variant="standard" onChange={(e) => setName(e.target.value)} label="Enter Username" />
                    <TextField variant="standard" label="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                    <Button className="first" variant="contained" onClick={submitlogin}>Login</Button>
                    <p style={{ textAlign: 'center' }}>OR</p>
                    <Button onClick={submithandler} variant="text">Create an account</Button>
                </Wrapper>
            ) : (
                <Wrapper>
                    <TextField variant="standard" label="Enter Username" onChange={(e) => setName(e.target.value)} />
                    <TextField variant="standard" label="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                    <TextField variant="standard" label="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                    <Button className="first" variant="contained" onClick={signupHandler}>Sign Up</Button>
                    <p style={{ textAlign: 'center' }}>OR</p>
                    <Button onClick={submithandler} variant="text">Login</Button>
                </Wrapper>
            )}
        </Component>
    );
};

export default Login;
