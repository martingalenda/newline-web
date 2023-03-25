// ? REACT:
    import { useRef } from 'react';
// ? REDUX:
    import { useSelector } from 'react-redux';
// ? COMPONENTS:
    import ClassicBtn from '../../../globals/buttons/classicBtn/ClassicBtn';
    import installBg from './media/installBg.mp4'
    import InstallBox from './box/InstallBox'
    import PremiumBtn from '../../../globals/buttons/premiumBtn/PremiumBtn';
// ? MODALS:
    import Modal from '../../../globals/modals/Modal.jsx'
    import PlayVideo from '../../../globals/modals/playVideo/PlayVideo.jsx';
    import {useModals} from '../../../../hooks/useModals'
    // ? WOW ANIMATION:
    import useWow from '../../../../hooks/useWow';


const Install = () => {
    
    const {texts} = useSelector(state => state.languages)

    const [isActiveTutorial, openTutorial, closeTutorial] = useModals();

    useWow()

    const installStep1 = useRef()
    const installStep2 = useRef()
    const installStep3 = useRef()
    
    const downloadClient = () => {
        // alert("Descargando el cliente") // Necesitamos hacer la función
        // Oculto el paso 1, y muestro el paso 2
        installStep1.current.style.display = "none"
        installStep2.current.style.display = "grid"
    }

    const nextStep = () => {
        // Oculto el paso 2, y muestro el paso 3
        installStep2.current.style.display = "none"
        installStep3.current.style.display = "grid"
    }

    return (
        <>
            <section className="install wow animate__fadeIn" data-wow-duration="1.5s">

                <InstallBox ref={installStep1} title={texts.installation.step1.title} step="1" wowAnimation="animate__fadeInDown">
                    <p className="install__box--description"> {texts.installation.step1.description} </p>
                    <ClassicBtn myOnClick={() => downloadClient()} btnClass="installSteps" text={texts.installation.step1.btn}/>
                </InstallBox>

                <InstallBox ref={installStep2} title={texts.installation.step2.title} step="2" wowAnimation="animate__fadeIn">
                    <p className="install__box--description"> {texts.installation.step2.description} </p>
                    <ClassicBtn btnClass="installSteps" myTarget="_blank" myRel="noreferrer" text={texts.installation.step2.btn} link="/register"/>
                    <ClassicBtn myOnClick={() => nextStep()} btnClass="installSteps" text={texts.installation.step2.btn2}/>
                </InstallBox>

                <InstallBox ref={installStep3} title={texts.installation.step3.title} step="3" wowAnimation="animate__fadeIn">
                    <p className="install__box--description"> {texts.installation.step3.description} </p>
                    <ClassicBtn myOnClick={() => openTutorial()} btnClass="installSteps" text={texts.installation.step3.btn}/>
                    <ClassicBtn myTarget="_blank" myRel="noreferrer" myHref="mailto:support@newlineg.com" btnClass="installSteps" text={texts.installation.step3.btn2}/>
                </InstallBox>

                {/* Background effect - video degradé */}
                <div className="install__bg--opacity"></div>
                <div className="install__bg"> <video autoPlay loop muted src={installBg} type="video/mp4" ></video> </div>

                <PremiumBtn/>

            </section>

            <Modal active={isActiveTutorial} close={closeTutorial}>
                <PlayVideo
                    url="https://www.youtube.com/embed/WosxYwhpVlQ?autoplay=1&mute=1&modestbranding=1&rel=0&theme=dark"
                    title="Tutorial - Installation" />
            </Modal>  
        </>
    )
}

export default Install;