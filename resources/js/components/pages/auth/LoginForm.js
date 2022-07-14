import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from "@mui/material";
import '../../../../css/login.css';

const LoginForm = () =>{
    return(
        <div >
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <h1>Sign in</h1>
            </div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">  
                <TextField name="email" id="outlined-basic" placeholder="Email" label="Email" variant="outlined" size="normal"  
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
                    <div><Button variant="contained" color='info'>Submit</Button></div>
            </div>

        </div>
    )
}

export default LoginForm;