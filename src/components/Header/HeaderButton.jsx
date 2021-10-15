import React from 'react'
import {useState} from 'react'
import {Box, Button, Typography, Badge} from '@material-ui/core'
import useStyles from './style'
import CallSharpIcon from '@material-ui/icons/CallSharp'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import LoginDialog from '../Login/Login'
function HeaderButton() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const openLoginDialog = () => {
        setOpen(true);
    } 

    return (
        <Box className={classes.wrapper}>
            <Link to ="">
            <Button variant="contained" className={classes.login} onClick = {() => openLoginDialog()}>
                Login
            </Button>
            </Link>

            <Link to ="" className={classes.container}>
                <CallSharpIcon></CallSharpIcon>
                <Typography style={{marginLeft: 10}}>Contact Us</Typography>
            </Link>
            
            
            <Link to="/cart" className={classes.container}>
            <Badge badgeContent={10} color="primary">
            <ShoppingCartIcon/>
            </Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Link>
            <LoginDialog open = {open} setOpen = {setOpen}/>
            
        </Box>
    )
}

export default HeaderButton
