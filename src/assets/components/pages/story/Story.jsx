import React from 'react';
import WOW from 'wowjs';
import crown from './media/crown.png'
import { Link } from "react-router-dom";
import mainStory from './story.json';


const Story = () => {

    const story = mainStory.story;

    const newWOW = () => {new WOW.WOW({live: false}).init();}
    newWOW()
    
    return(
        <section className="story wow animate__fadeIn" data-wow-duration="1.5s">

            <div className="story__bg--opacity"/>

            <div className="story__container">
                <img className="container__logoEp1" src={crown} alt="crown" />
                <h4 className="container__epNum">{story.episode}</h4>
                <h3 className="container__epTitle">{story.title}</h3>
                <Link to="/episode">
                    <div className="btnD-container">
                        <button className="btnD-story container__goChaps">{story.btn}</button>
                    </div>
                </Link>
                <span className="container__leyend">... {story.leyend} ...</span>
            </div>
            
        </section>
    );
}

export default Story;