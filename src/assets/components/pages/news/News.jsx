// ? REACT:
    import {useEffect} from 'react'; 
// ? REDUX:
    import { useSelector } from 'react-redux';
// ? WOW ANIMATION:
    import WOW from 'wowjs';
// ? COMPONENTS:
    import SliderNews from './slider/SliderNews.jsx';


const News = () => {

    const {texts} = useSelector(state => state.languages)
    
    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);

    return (
        <section className="news wow animate__fadeIn" data-wow-duration="1.5s">
            <div className="linesEffect"/>
            <h2 className="news__title">{texts.mainNews.title}</h2>
            <SliderNews/>
        </section>
    );
}

export default News; 