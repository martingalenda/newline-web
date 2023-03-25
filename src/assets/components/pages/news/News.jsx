// ? REDUX:
    import { useSelector } from 'react-redux';
// ? WOW ANIMATION:
    import useWow from '../../../hooks/useWow.jsx';
// ? COMPONENTS:
    import SliderNews from './slider/SliderNews.jsx';

const News = () => {
    
    useWow()

    const {texts} = useSelector(state => state.languages)

    return (
        <section className="news wow animate__fadeIn" data-wow-duration="1.5s">
            <div className="linesEffect"/>
            <h2 className="news__title"> {texts.mainNews.title} </h2>
            <SliderNews/>
        </section>
    );
}

export default News; 