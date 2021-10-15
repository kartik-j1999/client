import React from 'react'
import {navData} from '../../constants/data'
import {Box, Typography,Paper} from "@material-ui/core"
import useStyles from "./style"

function NavBar() {

    const classes = useStyles();


    return (
        <Box elevation={6} className={classes.navBarComponent}>
            {
                navData.map(data => (
                    <Box className={classes.container}>
                        <img src={data.url} alt="" className={classes.image} />
                        <Typography className={classes.text}>{data.text}</Typography>   
                    </Box>     
                ))
            }
        </Box>
    )
}

export default NavBar
