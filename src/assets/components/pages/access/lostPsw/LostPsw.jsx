// ? REACT:
    import {useState} from 'react';

// ? REDUX:
    import { useSelector } from 'react-redux';

// ? SUB-COMPONENTES
    import LostPsw1Step from './LostPsw1Step.jsx';
    import LostPsw2Step from './LostPsw2Step.jsx';
    import LostPsw3Step from './LostPsw3Step.jsx'; 

// ? MODALES:
    import Modal from "../../../globals/modals/Modal"
    import Notification from "../../../globals/modals/notifications/Notifications"
    import {useModals} from "../../../../hooks/useModals"


const LostPsw = () => {
    
    const {texts} = useSelector(state => state.languages)

    const [lostPswStep, setLostPswStep] = useState(1);
    const [isActiveN1, openN1, closeN1] = useModals()
    const [isActiveN2, openN2, closeN2] = useModals()

    return(
        <section className="lostPsw access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{texts.lostPsw.title}</h2>
                {lostPswStep === 1 && <LostPsw1Step lostPswStep={lostPswStep} openN1={openN1} setLPStep={setLostPswStep}/>}
                {lostPswStep === 2 && <LostPsw2Step lostPswStep={lostPswStep} setLPStep={setLostPswStep}/>}
                {lostPswStep === 3 && <LostPsw3Step lostPswStep={lostPswStep} openN2={openN2} setLPStep={setLostPswStep}/>}
            </div>

            {/* Notificación:  */}
            <Modal active={isActiveN1} close={closeN1}> 
                <Notification style={`announce`} close={closeN1}> 
                    <p>{texts.lostPsw.checkEmail}</p>
                </Notification>
            </Modal> 
            {/* Notificación:  */}
            <Modal active={isActiveN2} close={closeN2}>
                <Notification style={`success`} close={closeN2}> 
                    <h2>{texts.lostPsw.recover}</h2>
                    <p>{texts.lostPsw.pwChanged}</p>
                </Notification>
            </Modal> 

        </section>
    );
}

export default LostPsw;