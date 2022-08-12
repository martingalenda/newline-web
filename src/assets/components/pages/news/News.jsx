import {useEffect, useContext} from 'react'; 
import LangContext from '../../../context/LangContext';
import WOW from 'wowjs';
import SliderNews from './slider/Slider.jsx';
import BetaBtn from '../../globals/buttons/betaBtn/BetaBtn.jsx';

const News = () => {

    const { texts } = useContext(LangContext);
    
    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);

    return (
        <>
            <section className="news wow animate__fadeIn" data-wow-duration="1.5s">
                <div className="linesEffect"/>
                <h2 className="news__title">{texts.mainNews.title}</h2>
                <SliderNews/>
            </section>
            <BetaBtn />
        </>
    );
}

export default News; 