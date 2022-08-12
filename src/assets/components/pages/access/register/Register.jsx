import {useState, useContext} from 'react';
import LangContext from '../../../../context/LangContext';
import Reg1Step from './Reg1Step.jsx';
import Reg2Step from "./Reg2Step.jsx";

const Register = () => {

    const { texts } = useContext(LangContext);

    const [regStep, setRegStep] = useState(1);

    return(
        <section className="register access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{texts.register.title}</h2>
                {
                    regStep === 1 ? 
                    <Reg1Step regStep={regStep} setRegStep={setRegStep}/> 
                    : 
                    <Reg2Step regStep={regStep} setRegStep={setRegStep}/>
                }
            </div>
        </section>
    );

}

export default Register;