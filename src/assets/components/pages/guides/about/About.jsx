// ? REACT:
    import { useEffect} from 'react';
// ? REDUX:
    import { useSelector } from 'react-redux';
// ? WOW-ANIMATION:
    import WOW from 'wowjs';
// ? COMPONENTS:
    import PlayBtn from '../../../globals/buttons/playBtn/PlayBtn.jsx';
    import PlayVideo from '../../../globals/modals/playVideo/PlayVideo.jsx';
    import BetaBtn from '../../../globals/buttons/betaBtn/BetaBtn.jsx'; 
    import AboutBottom from './AboutBottom';
// ? MODALS:
    import Modal from '../../../globals/modals/Modal.jsx'
    import {useModals} from '../../../../hooks/useModals'

const About = () => {

    const [isActiveTrailer, openTrailer, closeTrailer] = useModals();

    const {texts} = useSelector(state => state.languages)

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
                    <PlayBtn open={openTrailer} text={texts.about.introPlay}/>
                </div>
                <AboutBottom/>
            </section>
            
            <BetaBtn />

            <Modal active={isActiveTrailer} close={closeTrailer}>
                <PlayVideo
                    url="https://www.youtube.com/embed/WosxYwhpVlQ?autoplay=1&mute=1&modestbranding=1&rel=0&theme=dark"
                    title="Newline Trailer" />
            </Modal>  
        </>
    );
}

export default About;