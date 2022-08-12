import {useEffect, useContext} from 'react';
import LangContext from '../../../context/LangContext';
import WOW from 'wowjs';
import introVideo from './media/intro.mp4';
import Countdown from '../../globals/countdown/Countdown.jsx';
import ButtonC from '../../globals/buttons/classicBtn/ButtonC.jsx';

const Hero = () => {

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);

    const { texts } = useContext(LangContext);

        return(
            <section className="hero wow animate__fadeIn" data-wow-duration="1.5s">
                
                    <div className="hero__content wow animate__fadeIn" data-wow-duration="2.5s" >
                        <Countdown date={'Sep 03 2022 10:32:53 GMT-0500'}/>
                        <ButtonC btnClass="JoinBeta" text={texts.hero.btnTxt} link="/playbeta"/>
                    </div>
                    <div className="hero__bg--opacity"></div>
                    <div className="hero__bg">
                        <video autoPlay loop muted src={introVideo} type="video/mp4" ></video>
                    </div>
    
            </section>
        );
}

export default Hero;