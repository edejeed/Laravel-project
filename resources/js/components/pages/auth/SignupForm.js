import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from "@mui/material";
import '../../../../css/login.css';
import '../../../../css/app.css';
import AccountBox from '@mui/icons-material/AccountBox';
import React, {useEffect, useState, useRef } from 'react';
import api from '../api/index.js'
import { useNavigate } from 'react-router-dom';

const SignupForm = () =>{
    const navigate = useNavigate();

    const form = useRef(null);
    const register = async(e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const {data} = await api.registerSubmit(formData);
        console.log(data.user);
        navigate('/login');
    }


    return(
        <div>
            <form
            ref={form}
            onSubmit={register}>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <h1>Sign up</h1>
            </div>

            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">  
                <TextField name="name" id="outlined-basic" placeholder="name" label="name" variant="outlined" size="normal"  
                InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                <AccountBox />
                </InputAdornment>
            ),
            }}/>
            </div>

            <div className="mt-2 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">  
                <TextField name="email"  placeholder="email" label="email" variant="outlined" size="normal"  
                InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                <EmailIcon />
                </InputAdornment>
            ),
            }}/>
            </div>

            <div className="mt-2 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">     
                <TextField name="password" type="password" placeholder="Password" label="Password" size="normal"
                InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                <PasswordOutlinedIcon />
                </InputAdornment>
                ),
            }} />
            </div>

            <div className="mt-2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div><Button variant="contained" type="submit">Submit</Button></div>
                    {/* <button className='navni' >Submit</button> */}
            </div>
            </form>
        </div>
    )
}

export default SignupForm;