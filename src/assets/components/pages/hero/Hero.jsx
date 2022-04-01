import React from 'react';
import WOW from 'wowjs';
import data from '../../data/data.js';
import introVideo from './media/intro.mp4';
import Countdown from '../../globals/countdown/Countdown.jsx';
import ButtonC from '../../globals/buttons/classicBtn/ButtonC.jsx';

const Hero = () => {

    const newWOW = () => { new WOW.WOW({live: false}).init(); }
    newWOW()

        return(
            <React.Fragment>
                <section className="hero wow animate__fadeIn" data-wow-duration="1.5s">
                    
                        <div className="hero__content wow animate__fadeIn" data-wow-duration="2.5s" >
                            <Countdown/>
                            <ButtonC btnClass="JoinBeta" text={data.hero.btnTxt} link="/playbeta"/>
                        </div>
                        <div className="hero__bg--opacity"></div>
                        <div className="hero__bg">
                            <video autoPlay loop muted src={introVideo} type="video/mp4" ></video>
                        </div>
    
                </section>
            </React.Fragment>
        );
}

export default Hero;