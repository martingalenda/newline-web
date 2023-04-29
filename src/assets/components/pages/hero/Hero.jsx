// ? REDUX:
    import {useSelector} from 'react-redux'; 
// ? WOW ANIMATION:
    import useWow from '../../../hooks/useWow';
// ? MEDIA:
    import introVideo from './media/intro.mp4';
// ? COMPONENTS:
    import Countdown from '../../globals/countdown/Countdown.jsx';
    import ClassicBtn from '../../globals/buttons/classicBtn/ClassicBtn.jsx';

const Hero = () => {

    useWow()

    const {texts} = useSelector(state => state.languages)
    const {access} = useSelector(state => state.users) 

        return(
            <section className="hero wow animate__fadeIn bg__active" data-wow-duration="2s">
                
                <main className="hero__content wow animate__fadeIn" data-wow-duration="2.5s" >
                    <Countdown bgActive="true" date={'June 27 2023 10:32:53 GMT-0500'}/>
                    { 
                        access >= 10 ?
                        <ClassicBtn btnClass="access" text={texts.hero.btnTxt2} link="/mypanel"/>
                        :
                        <ClassicBtn btnClass="access" text={texts.hero.btnTxt} link="/premium"/>
                    }
                </main>

                {/* Background effect - video degradé */}
                <div className="hero__bg--opacity"/>
                <div className="hero__bg"> 
                    <video className="hero__video" autoPlay loop muted src={introVideo} type="video/mp4" />   
                </div>
    
            </section>
        );
}

export default Hero;