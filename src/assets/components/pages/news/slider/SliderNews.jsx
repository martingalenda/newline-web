import {useContext} from 'react';
import LangContext from '../../../../context/LangContext';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardNew from '../cardNew/CardNew.jsx';

const SliderNews = () => {

    const { texts } = useContext(LangContext);

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
                    texts.news.map((newI) => 
                        <CardNew 
                            key={newI.id}
                            ident={newI.id} 
                            url={newI.url} 
                            title={newI.title} 
                            type={newI.type} 
                            btnTxt={newI.btnTxt} 
                            date={newI.date} 
                            intro={newI.intro} 
                            bg={`newsBg${newI.id}`}  /> 
                    )
                }
            </Slider>
        </div>
    ); 
}

export default SliderNews;