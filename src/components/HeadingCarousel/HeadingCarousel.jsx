import React from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Container, Button } from "@mui/material";
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Fade } from 'react-reveal';

import "./style.scss";
const HeadingCarousel = (props) => {

    var settings = {
        dots: false,
        draggable: true,
        // fade: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="heading-carousel-content">
            <Slider {...settings}>
                {
                    props.topCarouselImages.map(item => {
                        return (
                            <div className="carousel-item" key={item.id}>
                                <Container className="wallpaper-content">
                                    <Fade bottom>
                                        <div className="content">
                                            <h1>O'z shahar qurilish invest</h1>
                                            <p>ся наша команда работает для того, чтобы отразить вашу
                                                индивидуальность в месте, где вы проводите половину своего времени”</p>

                                            <div className="d-flex bottom align-items-center">
                                                <Button>Скачать презентацию </Button>

                                                <Link to="/">
                                                    <ApartmentIcon />
                                                    Проекты
                                                </Link>
                                            </div>
                                        </div>
                                    </Fade>
                                </Container>
                            </div>
                        )
                    })
                }
            </Slider>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        topCarouselImages: state.scene.topCarouselImages
    }
}

export default connect(mapStateToProps, null)(HeadingCarousel)