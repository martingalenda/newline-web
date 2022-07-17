import {useState} from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardNew from '../cardNew/CardNew.jsx';
import data from '../../../data/data.js'; 

const SliderNews = (props) => {

    const [allNews] = useState(data.news);

    // Slider conf
    const settings = {
        dot: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 2,
        cssEase: "linear"
    } 

    return(
        <div className="news__container1 wow animate__fadeInRight" data-wow-duration="1.5s">
            <Slider {...settings}>
                {   
                    // Recorro las noticias
                    allNews.map((newI, i ) => 
                    <CardNew key={i}
                        ident={i}
                        url={newI.url}
                        title={newI.title} 
                        type={newI.type} 
                        date={newI.date} 
                        intro={newI.intro} 
                        bg={`newsBg${i}`}  /> 
                    )
                }
            </Slider>
        </div>
    );
}

export default SliderNews;