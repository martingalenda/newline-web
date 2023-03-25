// ? REACT:
    import {useState} from 'react';
// ? REDUX:
    import {useSelector} from 'react-redux';
// ? WOW ANIMATIONS:
    import useWow from '../../../../hooks/useWow';
// ? COMPONENTS:
    import SliderHeroes from './slider/SliderHeroes';
    import PremiumBtn from '../../../globals/buttons/premiumBtn/PremiumBtn';
 
    
const Heroes = () => {

    const {texts} = useSelector(state => state.languages)
    const [stopWow, setStopWow] = useState(false)

    useWow()
  
    return (
        <>
            <section className={`heroes ${!stopWow && 'wow animate__fadeIn'}`} data-wow-duration="1.5s">
                <h2 className={`heroes__title ${!stopWow && 'wow animate__fadeInDown'}`} data-wow-duration="1.6s">{texts.heroes.title}</h2>
                <span className={`heroes__leyend ${!stopWow && 'wow animate__fadeInDown'}`} data-wow-duration="1.6s">
                    {texts.heroes.leyend} 
                    <br/> 
                    {texts.heroes.leyend2}
                </span>

                <SliderHeroes stopWow={stopWow} setStopWow={setStopWow}/>

                <div className="smokeEffect">
                    <div className="smoke"/>
                </div>
            </section> 
            <PremiumBtn />
        </>
    )
}

export default Heroes; 