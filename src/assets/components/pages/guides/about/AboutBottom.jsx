import { useEffect, useContext } from 'react';
import WOW from 'wowjs';
import LangContext from '../../../../context/LangContext';

import bg_intro_br from './media/bg_intro_br.png';
import bg_intro_bl from './media/bg_intro_bl.png';

import ButtonC from '../../../globals/buttons/classicBtn/ButtonC';

const AboutBottom = () => {

    const { texts } = useContext(LangContext);

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);

    return (
        <>
            <div className="aboutNL__changes wow animate__fadeIn" data-wow-offset="160" data-wow-duration="5.25s">
                <h2 className="changes__title">{texts.about.introTitle2}</h2>
                <p className="changes__parraph">{texts.about.introText2}</p>
                <ButtonC btnClass="playNow" text={texts.about.comeOn} link="/guides/install"/>
            </div>
            <img className="changes__bgFight changes__bgFight--left wow animate__fadeInLeft" data-wow-offset="120" data-wow-duration="1.5s" src={bg_intro_bl} alt="Fight!" />
            <img className="changes__bgFight changes__bgFight--right wow animate__fadeInRight" data-wow-offset="120" data-wow-duration="1.5s" src={bg_intro_br} alt="Fight!" />
        </>
    )
}

export default AboutBottom