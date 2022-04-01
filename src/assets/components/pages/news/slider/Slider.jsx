import React, {useState} from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardNew from '../cardNew/CardNew.jsx';
import data from '../../../data/data.js';

const SliderNews = () => {

    const [allNews] = useState(data.news);

    const settings = {
        dot: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 2,
        cssEase: "linear"
    }

    const changeNew = (news) => {
        console.log(news)
    }

    return(
        <div className="news__container1 wow animate__fadeInRight" data-wow-duration="1.5s">
            <Slider {...settings}>
                {   
                    // Recorro las noticias
                    allNews.map((newI, i ) => 
                    <CardNew key={i} title={newI.title} type={newI.type} date={newI.date} txt={newI.txt} bg={`newsBg${i}`} changeNew={changeNew} /> 
                    )
                }
            </Slider>
        </div>
    );
}

export default SliderNews;