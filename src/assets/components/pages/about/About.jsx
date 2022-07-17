import React, {useState} from 'react';
import WOW from 'wowjs';
import data from '../../data/data.js';
import PlayBtn from '../../globals/buttons/playBtn/PlayBtn.jsx';
import ModalsT from '../../globals/modals/ModalsT.jsx'
import PlayVideo from '../../globals/modals/playVideo/PlayVideo.jsx';
import bg_intro_br from './media/bg_intro_br.png';
import bg_intro_bl from './media/bg_intro_bl.png';
import BetaBtn from '../../globals/buttons/betaBtn/BetaBtn.jsx';

const About = () => {

    const aboutNL = data.about 

    const newWOW = () => {new WOW.WOW({live: false}).init();}
    newWOW()

    const [trailerShow, setTrailerShow] = useState(false);

    return(
        <React.Fragment>

            <section className="aboutNL wow animate__fadeIn" data-wow-duration="1.5s">
                <div className="aboutNL__intro wow animate__fadeInDown" data-wow-duration="1.5s">
                    <h2 className="intro__title">{aboutNL.introTitle} <span className="title__deg">{aboutNL.introSubTitle}</span></h2>
                    <p className="intro__parraph">{aboutNL.introText}</p>
                    <PlayBtn show={trailerShow} setShow={setTrailerShow} text={aboutNL.introPlay}/>
                </div>
                <div className="aboutNL__changes wow animate__fadeIn" data-wow-offset="160" data-wow-duration="5.25s">
                    <h2 className="changes__title">{aboutNL.introTitle2}</h2>
                    <p className="changes__parraph">{aboutNL.introText2}</p>
                </div>
                <img className="changes__bgFight changes__bgFight--left wow animate__fadeInLeft" data-wow-offset="120" data-wow-duration="1.5s" src={bg_intro_bl} alt="Fight!" />
                <img className="changes__bgFight changes__bgFight--right wow animate__fadeInRight" data-wow-offset="120" data-wow-duration="1.5s" src={bg_intro_br} alt="Fight!" />
            </section>
            
            <BetaBtn />

            <ModalsT type={<PlayVideo/>} show={trailerShow} setShow={setTrailerShow} />  

        </React.Fragment>
    );
}

export default About;