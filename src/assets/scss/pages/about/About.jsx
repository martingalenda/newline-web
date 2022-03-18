import React from 'react';
import WOW from 'wowjs';
import PlayBtn from '../../components/buttons/playBtn/PlayBtn';
import bg_intro_br from './media/bg_intro_br.png';
import bg_intro_bl from './media/bg_intro_bl.png';
import about from './about.json';
import Maps from '../../components/maps/Maps';

const About = () => {

    const newWOW = () => {new WOW.WOW().init();}
    newWOW()

    return(
        <React.Fragment>
            <section className="aboutNL wow animate__fadeIn" data-wow-duration="1s">
                <div className="aboutNL__intro wow animate__fadeInDown" data-wow-duration="1.5s">
                    <h2 className="intro__title">{about.about.introTitle} <span className="title__deg">{about.about.introSubTitle}</span></h2>
                    <p className="intro__parraph">{about.about.introText}</p>
                    <PlayBtn text={about.about.introPlay}/>
                </div>
                <div className="aboutNL__changes wow animate__fadeIn" data-wow-offset="160" data-wow-duration="4s">
                    <h2 className="changes__title">{about.about.introTitle2}</h2>
                    <p className="changes__parraph">{about.about.introText2}</p>
                </div>
                <img className="changes__bgFight changes__bgFight--left wow animate__fadeInLeft" data-wow-offset="120" data-wow-duration="1.5s" src={bg_intro_bl} alt="Fight!" />
                <img className="changes__bgFight changes__bgFight--right wow animate__fadeInRight" data-wow-offset="120" data-wow-duration="1.5s" src={bg_intro_br} alt="Fight!" />
            </section>
            <Maps/>
        </React.Fragment>
    );
}

export default About;