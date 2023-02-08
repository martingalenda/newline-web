// ? REACT:
    import {useEffect} from 'react';
// ? REDUX:
    import { useSelector } from 'react-redux';
// ? WOW ANIMATION:
    import WOW from 'wowjs';
// ? IMG:
    import crown from './media/crown.png'
// ? COMPONENTS:
    import ButtonC from '../../globals/buttons/classicBtn/ButtonC';
    import BetaBtn from '../../globals/buttons/betaBtn/BetaBtn';

const Story = () => {

    const {texts} = useSelector(state => state.languages)

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);
    
    return(
        <section className="story wow animate__fadeIn" data-wow-duration="1.5s">

            <div className="story__bg--opacity"/>

            <div className="story__container">
                <img className="container__logoEp1" src={crown} alt="crown" />
                <h4 className="container__epNum">{texts.story.episode}</h4>
                <h3 className="container__epTitle">{texts.story.title}</h3>
                <ButtonC btnClass="story" text={texts.story.btn} link="/episode"/>
                <span className="container__leyend">... {texts.story.leyend} ...</span>
            </div>
            <BetaBtn/>
        </section>
    );
}

export default Story;