import React from 'react';
import WOW from 'wowjs';
import news from './news.json';
import CardNew from '../../pages/news/cardNew/CardNew.jsx';
/* import SliderNews from '../../globals/slider/Slider.jsx'; */

const News = () => {

    const newWOW = () => {new WOW.WOW().init();}
    newWOW()

    return(
        <section className="news wow animate__fadeIn" data-wow-duration="1.5s">
            <div className="linesEffect"/>
            <h2 className="news__title">{news.news.title}</h2>
            <div className="news__container card-wrapper wow animate__fadeInRight" data-wow-duration="2s">
                    <CardNew />
                    <CardNew />
                    <CardNew />
                    <CardNew /> 
            </div>
        </section>
    );
}

export default News;