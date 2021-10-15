import { Dialog, DialogContent, TextField, Box, Button, makeStyles, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react';
import useStyles from './style'

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}



const Login = ({open, setOpen}) => {
    const classes = useStyles();
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    // const loginUser = async() => {
    //     let response = await authenticateLogin(login);
    //     if(!response) 
    //         showError(true);
    //     else {
    //         showError(false);
    //         handleClose();
    //         setAccount(login.username);
    //     }
    // }

    // const signupUser = async() => {
    //     let response = await authenticateSignup(signup);
    //     if(!response) return;
    //     handleClose();
    //     setAccount(signup.username);
    // }
    
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }



    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog open = {open} onClose = {handleClose}>
            <DialogContent className={classes.component}>
            <Box style={{display: 'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ? 
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter Email/Mobile number' />
                            { error && <Typography className={classes.error}>Please enter valid Email ID/Mobile number</Typography> }
                            <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                            <Typography className={classes.text}>By continuing, you agree to Gift Shop's Terms of Use and Privacy Policy.</Typography>
                            <Button className={classes.loginbtn}  >Login</Button>
                            <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                            <Button className={classes.requestbtn}>Request OTP</Button>
                            <Typography className={classes.createText} onClick={() => toggleSignup()}>New to Gift Shop? Create an account</Typography>
                        </Box> : 
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                            <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                            <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                            <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                            <Button className={classes.loginbtn}  >Continue</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
            
        </Dialog>
    )
}

export default Login
