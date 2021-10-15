import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import useStyles from "./style"
import logo from '../images/logo.png'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'
import HeaderButton from './HeaderButton'
function Header() {
    const classes = useStyles();



    return (
        <div>
            <AppBar className={classes.header}>
                <Toolbar>
                    <Link to='/'><img src={logo} alt="Page logo named gift shop" className={classes.logo} /></Link>
                    <SearchBar></SearchBar>
                    <HeaderButton></HeaderButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
