import React from 'react'
import {Box, Typography} from "@material-ui/core"
import banner1 from "../images/threeBanner1.jpg"
import banner2 from "../images/threeBanner3.jpg"
import banner3 from "../images/threeBanner2.jpg"
import useStyles from "./style"



function MidSection() {

    const classes = useStyles();

    return (
        <Box className={classes.midSectionWrapper}>
            <img className={classes.midSectionImg} src={banner2} alt="" style={{width: '33%'}}/>
            <img className={classes.midSectionImg} src={banner3} alt="" style={{width: '33%'}}/>
            <img className={classes.midSectionImg} src={banner1} alt="" style={{width: '33%'}}/>
            
        </Box>
    )
}

export default MidSection
