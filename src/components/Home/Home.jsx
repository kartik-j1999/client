import React from 'react'
import NavBar from "./NavBar"
import useStyles from "./style"
import Banner from "./Banner"
import MidSection from './MidSection'
import Slide from "./Slide"
import {Box, Typography} from "@material-ui/core"
import offerPic1 from "../images/giftForWifePic.JPG"

function Home() {

    const classes = useStyles();

    return (
        <div>
            <NavBar></NavBar>
            <Box className={classes.bannerComponent}>
            <Banner></Banner>
            <Box style={{display: 'flex'}} >
                <Box style={{width: '70%'}}>
                    <Slide timer ={true} title = {'Top Offers'}/>
                </Box> 
                <Box className={classes.rightWrapper}>
                    <img src={offerPic1} alt="" style={{height: '100%'}}/>
                </Box>
            </Box>
            <MidSection></MidSection>
            <Slide timer ={false} title={'BestSellers'}/>

            </Box>
        </div>
    )
}

export default Home
