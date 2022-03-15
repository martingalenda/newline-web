import React, { Component } from 'react';
import introVideo from './media/intro.mp4';
import ButtonC from '../../components/buttons/classic/ButtonC';
import Countdown from '../../components/countdown/Countdown';
import WOW from 'wowjs';

class Hero extends Component {

    componentDidMount() {new WOW.WOW().init();}

    render() {
        return(
            <section className="hero wow animate__fadeIn" data-wow-duration="1.5s">
                
                    <div className="hero__content" >
                        <Countdown/>
                        <ButtonC text="Obten acceso" link="/playbeta"/>
                    </div>
                    <div className="hero__bg--opacity"></div>
                    <div className="hero__bg">
                        <video autoPlay loop muted src={introVideo} type="video/mp4" ></video>
                    </div>

            </section>
        );
    }
}

export default Hero;