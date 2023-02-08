// ? REACT:
    import {useState} from 'react';
// ? REDUX:
    import { useSelector } from 'react-redux';
// ? SUB-COMPONENTES:
    import Reg1Step from './Reg1Step.jsx';
    import Reg2Step from "./Reg2Step.jsx";
// ? MODALES:
    import Modal from "../../../globals/modals/Modal"
    import Notification from "../../../globals/modals/notifications/Notifications"
    import {useModals} from "../../../../hooks/useModals"

    
const Register = () => {

    const {texts} = useSelector(state => state.languages)

    const [regStep, setRegStep] = useState(1);
    const [isActiveN1, openN1, closeN1] = useModals()
    const [isActiveN2, openN2, closeN2] = useModals()

    return(
        <section className="register access" >
            <div className="access__container">
                <h2 className="access__title">{texts.register.title}</h2>
                {
                    regStep === 1 ? 
                    <Reg1Step regStep={regStep} openN1={openN1} setRegStep={setRegStep}/> 
                    : 
                    <Reg2Step regStep={regStep} openN2={openN2} setRegStep={setRegStep}/>
                }
            </div>
            
            {/* Notificación: Chequee su e-mail RegStep1 finalizado */}
            <Modal active={isActiveN1} close={closeN1}> 
                <Notification style={`announce`} close={closeN1}> 
                    <p>{texts.register.checkEmail}</p>
                </Notification>
            </Modal> 
            {/* Notificación: Registro exitoso RegStep2 finalizado */}
            <Modal active={isActiveN2} close={closeN2}>
                <Notification style={`success`} close={closeN2}> 
                    <h2>{texts.modals.register.success}</h2>
                    <p>{texts.modals.register.successP}</p>
                </Notification>
            </Modal> 

        </section>
    );

}

export default Register; 