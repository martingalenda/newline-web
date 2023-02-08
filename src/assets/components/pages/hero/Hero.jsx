// ? REACT:
    import {useEffect} from 'react';
// ? REDUX:
    import { useSelector } from 'react-redux';
// ? WOW ANIMATION:
    import WOW from 'wowjs';
// ? MEDIA:
    import introVideo from './media/intro.mp4';
// ? COMPONENTS:
    import Countdown from '../../globals/countdown/Countdown.jsx';
    import ButtonC from '../../globals/buttons/classicBtn/ButtonC.jsx';

    
const Hero = () => {

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);

    const {texts} = useSelector(state => state.languages)
    const {access} = useSelector(state => state.users)

        return(
            <section className="hero wow animate__fadeIn" data-wow-duration="1.5s">
                
                    <div className="hero__content wow animate__fadeIn" data-wow-duration="2.5s" >
                        <Countdown bgActive="true" date={'March 12 2023 10:32:53 GMT-0500'}/>
                        { 
                            access >= 10 ?
                            <ButtonC btnClass="access" text={texts.hero.btnTxt2} link="/mypanel"/>
                            :
                            <ButtonC btnClass="access" text={texts.hero.btnTxt} link="/premium"/>
                         }
                    </div>

                    {/* Background effect - video degradé */}
                    <div className="hero__bg--opacity"></div>
                    <div className="hero__bg"> <video autoPlay loop muted src={introVideo} type="video/mp4" ></video> </div>
    
            </section>
        );
}

export default Hero;