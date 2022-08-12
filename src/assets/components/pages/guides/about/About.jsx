import {useState, useEffect, useContext} from 'react';
import WOW from 'wowjs';
import LangContext from '../../../../context/LangContext';
import PlayBtn from '../../../globals/buttons/playBtn/PlayBtn.jsx';
import Modal from '../../../globals/modals/Modal.jsx'
import PlayVideo from '../../../globals/modals/playVideo/PlayVideo.jsx';
import bg_intro_br from './media/bg_intro_br.png';
import bg_intro_bl from './media/bg_intro_bl.png';
import BetaBtn from '../../../globals/buttons/betaBtn/BetaBtn.jsx';

const About = () => {
    
    const [trailerShow, setTrailerShow] = useState(false);

    const { texts } = useContext(LangContext);

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);


    return(
        <>
            <section className="aboutNL wow animate__fadeIn" data-wow-duration="1.5s">
                <div className="aboutNL__intro wow animate__fadeInDown" data-wow-duration="1.5s">
                    <h2 className="intro__title">{texts.about.introTitle} <span className="title__deg">{texts.about.introSubTitle}</span></h2>
                    <p className="intro__parraph">{texts.about.introText}</p>
                    <PlayBtn show={trailerShow} setShow={setTrailerShow} text={texts.about.introPlay}/>
                </div>
                <div className="aboutNL__changes wow animate__fadeIn" data-wow-offset="160" data-wow-duration="5.25s">
                    <h2 className="changes__title">{texts.about.introTitle2}</h2>
                    <p className="changes__parraph">{texts.about.introText2}</p>
                </div>
                <img className="changes__bgFight changes__bgFight--left wow animate__fadeInLeft" data-wow-offset="120" data-wow-duration="1.5s" src={bg_intro_bl} alt="Fight!" />
                <img className="changes__bgFight changes__bgFight--right wow animate__fadeInRight" data-wow-offset="120" data-wow-duration="1.5s" src={bg_intro_br} alt="Fight!" />
            </section>
            
            <BetaBtn />

            <Modal show={trailerShow} setShow={setTrailerShow}>
                <PlayVideo 
                    url="https://www.youtube.com/embed/WosxYwhpVlQ?autoplay=1&mute=1&modestbranding=1&rel=0&theme=dark"
                    title="Newline Trailer" />
            </Modal>  
        </>
    );
}

export default About;