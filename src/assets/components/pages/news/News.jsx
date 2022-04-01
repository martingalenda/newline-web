import React from 'react';
import WOW from 'wowjs';
import data from '../../data/data.js';
import SliderNews from './slider/Slider.jsx';
import BetaBtn from '../../globals/buttons/betaBtn/BetaBtn.jsx';

const News = () => {

    
    const newWOW = () => {new WOW.WOW({live: false}).init();}
    newWOW()

    return(
        <React.Fragment>
            <section className="news wow animate__fadeIn" data-wow-duration="1.5s">
                <div className="linesEffect"/>
                <h2 className="news__title">{data.mainNews.title}</h2>
                <SliderNews/>
            </section>
            <BetaBtn />
        </React.Fragment>
    );
}

export default News;