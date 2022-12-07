import { Button, FormControl, IconButton, Input, InputLabel, Paper, Typography } from '@mui/material'
import React from 'react'
import './styles.css'
import {Box} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import loginHat from '../../assets/login-hat.png'
import circule from '../../assets/Vector.png'
import blueCircule from '../../assets/Vector1.png'
import { useNavigate } from "react-router-dom";

const Login = ({setLoggedin, setOpenLogin}) => {

    const navigate = useNavigate();

    const handleCloseLogin = () => {
        setOpenLogin(false)

    }


    const handleLogin = () => {
        navigate('/captain')
        setLoggedin(true)
        setOpenLogin(false)
    }
  return (
    <>
        <div className='overlay'></div>
        <div className="login-container">
            <Paper className='paper'>
                
                <Box className='paper-left'>
                    
                    <img className='back-circule' src={circule} alt='alt' />
                    <img className='back-circule two' src={circule}  alt='alt' />
                    <Typography letterSpacing={1} marginLeft={2} fontSize={30} className='welcome'>Welcome Back</Typography>
                </Box>
                <Box className='paper-right'>
                    
                    <Typography marginTop={1} fontWeight={600} variant='h4' sx={{color:'#64a9e6', }}>
                        Log in
                    
                    </Typography>

                    <img src={loginHat} className='login-hat' alt='alt' />


                    <form className='login-form' action="">
                        <FormControl>
                            <InputLabel htmlFor='name-input'>name</InputLabel>
                            <Input id='name-input' />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor='password-input'>passowrd</InputLabel>
                            <Input id='password-input' type='password' />
                        </FormControl>
                        <Button onClick={handleLogin} type='submit' variant='contained' sx={{width: '150px', marginTop:'.5rem', borderRadius:'15px'}}>Log in</Button>
                    </form>
                    <img className='back-circule-blue' src={blueCircule} alt='alt' />
                    <img className='back-circule-blue two' src={blueCircule} alt='alt'  />
                </Box>

                <IconButton  className='close-btn' onClick={handleCloseLogin}>
                        <CloseIcon sx={{color: 'black'}}/>
                    </IconButton>
            </Paper>
        </div>
    </>
  )
}

export default Login