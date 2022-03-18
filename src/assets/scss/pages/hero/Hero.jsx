import React from 'react';
import WOW from 'wowjs';
import Countdown from '../../components/countdown/Countdown';
import ButtonC from '../../components/buttons/classicBtn/ButtonC';
import introVideo from './media/intro.mp4';
import hero from './hero.json';

const Hero = () => {

    const newWOW = () => {new WOW.WOW().init();}
    newWOW()

        return(
            <section className="hero wow animate__fadeIn" data-wow-duration="1.5s">
                
                    <div className="hero__content wow animate__fadeIn" data-wow-duration="2.5s" >
                        <Countdown/>
                        <ButtonC text={hero.hero.btnTxt} link={hero.hero.btnLink}/>
                    </div>
                    <div className="hero__bg--opacity"></div>
                    <div className="hero__bg">
                        <video autoPlay loop muted src={introVideo} type="video/mp4" ></video>
                    </div>

            </section>
        );
}

export default Hero;