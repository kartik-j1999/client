import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Box, Typography,Button,Divider} from "@material-ui/core"
import { products } from "../../constants/data.js";
import Countdown from 'react-countdown';
import useStyles from "./style"
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

function Slide({timer, title}) {

    const classes = useStyles();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}> {hours} : {minutes} : {seconds}  Left</span>;
    }
    return (
        <Box className={classes.slideComponent}>
            <Box className={classes.deal} >
            <Typography className={classes.dealText}>{title}</Typography>
            
                {
                    timer && 
                    <React.Fragment>
                        <img className={classes.proImg} src ={timerURL} style={{ width:24}} />
                        <Countdown date={Date.now() + 5.04e+7 } renderer={renderer} />
                        
                    </React.Fragment>
                }
                <Button variant="contained"  className={classes.button}>View All</Button>
            </Box>
            <Divider/>
            
        <Carousel
            responsive={responsive}
            infinite={true}
            draggable={false}
            swipeable={false}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={10000}
            keyBoardControl={true}
            showDots={false}
            removeArrowOnDeviceType={['tablet','mobile']}
            dotListClass="custom-dot-list-style"
            itemsClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
        >
            {
                products.map(product => (
                    <Box textAlign="center" className={classes.wrapper}>
                        <img className={classes.productImage} src={product.url} />
                        <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}> {product.discount}</Typography>
                        <Typography className={classes.text} style={{ color: 'green' }}> {product.tagline}</Typography>
                        <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{product.title.shortTitle} </Typography>
                    </Box>
                ))
            }
            
        </Carousel>
        </Box>
    )
}

export default Slide;
