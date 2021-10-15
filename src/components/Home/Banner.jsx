import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {bannerData} from '../../constants/data'
import useStyles from './style'
function Banner() {
    const classes = useStyles();
    return (
        <Carousel
            autoPlay = {true}
            interval = {2000}
            indicators = {false}
            cycleNavigation = {true}
        >
            {
                bannerData.map( (image) => <img src={image} className={classes.carouselImage} /> )
            }
        </Carousel>
    )
}

export default Banner
