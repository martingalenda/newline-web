import { useContext, useRef} from 'react';
import LangContext from '../../../../context/LangContext';
import ButtonC from '../../../globals/buttons/classicBtn/ButtonC';
import installBg from './media/installBg.mp4'
import InstallBox from './box/InstallBox'
import BetaBtn from '../../../globals/buttons/betaBtn/BetaBtn';
import Modal from '../../../globals/modals/Modal.jsx'
import PlayVideo from '../../../globals/modals/playVideo/PlayVideo.jsx';
import {useModals} from '../../../../hooks/useModals'

const Install = () => {
    
    const { texts } = useContext(LangContext); 

    const [isActiveTutorial, openTutorial, closeTutorial] = useModals();

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
                    <p className="install__box--description">{texts.installation.step1.description}</p>
                    <ButtonC myOnClick={() => downloadClient()} btnClass="installSteps" text={texts.installation.step1.btn}/>
                </InstallBox>

                <InstallBox ref={installStep2} title={texts.installation.step2.title} step="2" wowAnimation="animate__fadeIn">
                    <p className="install__box--description">{texts.installation.step2.description}</p>
                    <ButtonC btnClass="installSteps" myTarget="_blank" myRel="noreferrer" text={texts.installation.step2.btn} link="/register"/>
                    <ButtonC myOnClick={() => nextStep()} btnClass="installSteps" text={texts.installation.step2.btn2}/>
                </InstallBox>

                <InstallBox ref={installStep3} title={texts.installation.step3.title} step="3" wowAnimation="animate__fadeIn">
                    <p className="install__box--description">{texts.installation.step3.description}</p>
                    <ButtonC myOnClick={() => openTutorial()} btnClass="installSteps" text={texts.installation.step3.btn}/>
                    <ButtonC myTarget="_blank" myRel="noreferrer" myHref="mailto:support@newlineg.com" btnClass="installSteps" text={texts.installation.step3.btn2}/>
                </InstallBox>

                {/* Background effect - video degradé */}
                <div className="install__bg--opacity"></div>
                <div className="install__bg"> <video autoPlay loop muted src={installBg} type="video/mp4" ></video> </div>

                <BetaBtn/>

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