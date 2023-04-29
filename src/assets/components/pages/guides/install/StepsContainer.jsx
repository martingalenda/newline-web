// ? REACT:
    import {useState} from 'react'
// ? REDUX:
    import { useSelector } from 'react-redux';
// ? COMPONENTS:
    import ClassicBtn from '../../../globals/buttons/classicBtn/ClassicBtn';
    import InstallBox from './box/InstallBox'
// ? MODALS:
    import Modal from '../../../globals/modals/Modal.jsx'
    import PlayVideo from '../../../globals/modals/playVideo/PlayVideo.jsx';
    import {useModals} from '../../../../hooks/useModals'

const StepsContainer = ({setStopWow}) => {

    const {texts} = useSelector(state => state.languages)
    const [isActiveTutorial, openTutorial, closeTutorial] = useModals();
    const [step, setStep] = useState(1)

    const nextStep = () => { setStep(step + 1) }

    const downloadClient = () => {
        setStopWow(true)
        // alert("Descargando el cliente") // Necesitamos hacer la función
        nextStep()
    }

    switch(step){
        case 1: 
            return (
                <InstallBox title={texts.installation.step1.title} step="1" wowAnimation="animate__fadeInDown">
                    <p className="install__box--description"> {texts.installation.step1.description} </p>
                    <ClassicBtn myOnClick={() => downloadClient()} btnClass="installSteps" text={texts.installation.step1.btn}/>
                </InstallBox> 
            )
        case 2:
            return (
                <InstallBox title={texts.installation.step2.title} step="2">
                    <p className="install__box--description"> {texts.installation.step2.description} </p>
                    <ClassicBtn btnClass="installSteps" myTarget="_blank" myRel="noreferrer" text={texts.installation.step2.btn} link="/register"/>
                    <ClassicBtn myOnClick={() => nextStep()} btnClass="installSteps" text={texts.installation.step2.btn2}/>
                </InstallBox>
            )
        case 3: 
            return (
                <>
                    <InstallBox title={texts.installation.step3.title} step="3">
                        <p className="install__box--description"> {texts.installation.step3.description} </p>
                        <ClassicBtn myOnClick={() => openTutorial()} btnClass="installSteps" text={texts.installation.step3.btn}/>
                        <ClassicBtn myTarget="_blank" myRel="noreferrer" myHref="mailto:support@newlineg.com" btnClass="installSteps" text={texts.installation.step3.btn2}/>
                    </InstallBox>
                    <Modal active={isActiveTutorial} close={closeTutorial}>
                        <PlayVideo
                            url="https://www.youtube.com/embed/WosxYwhpVlQ?autoplay=1&mute=1&modestbranding=1&rel=0&theme=dark"
                            title="Tutorial - Installation" />
                    </Modal> 
                </>
            )
            
        default:
            return;
    }
}

export default StepsContainer
            