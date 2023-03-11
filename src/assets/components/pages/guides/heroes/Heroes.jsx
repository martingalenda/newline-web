// ? REACT:
    import { useEffect} from 'react';
// ? REDUX:
    import { useSelector } from 'react-redux';
// ? WOW ANIMATIONS:
    import WOW from 'wowjs';
// ? COMPONENTS:
    import SliderHeroes from './slider/SliderHeroes';
    import BetaBtn from '../../../globals/buttons/betaBtn/BetaBtn';
 
    
const Heroes = () => {

    const {texts} = useSelector(state => state.languages)

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);

    return (
        <>
            <section className="heroes wow animate__fadeIn" data-wow-duration="1.5s">
                <h2 className="heroes__title wow animate__fadeInDown" data-wow-duration="1.5s">{texts.heroes.title}</h2>
                <span className="heroes__leyend wow animate__fadeInDown" data-wow-duration="1.5s">
                    {texts.heroes.leyend} 
                    <br/> 
                    {texts.heroes.leyend2}
                </span>

                <SliderHeroes/>

                <div className="smokeEffect">
                    <div className="smoke"/>
                </div>
            </section> 
            <BetaBtn />
        </>
    )
}

export default Heroes; 