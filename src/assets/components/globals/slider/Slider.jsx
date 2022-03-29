import React from 'react';
import CardNew from '../../pages/news/cardNew/CardNew.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderNews = () => {

    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slideToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }

    return(
        <Slider {...settings}>
            <div className="news__container card-wrapper wow animate__fadeInRight" data-wow-duration="2s">
                    <CardNew />
                    <CardNew />
                    <CardNew />
                    <CardNew /> 
            </div>
        </Slider>
    );
}

export default SliderNews;