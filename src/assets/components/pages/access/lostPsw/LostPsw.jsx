import {useState, useContext} from 'react';
import LangContext from '../../../../context/LangContext';
import LostPsw1Step from './LostPsw1Step.jsx';
import LostPsw2Step from './LostPsw2Step.jsx';
import LostPsw3Step from './LostPsw3Step.jsx';

const LostPsw = () => {
    
    const { texts } = useContext(LangContext);

    const [lostPswStep, setLostPswStep] = useState(1);

    return(
        <section className="lostPsw access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{texts.lostPsw.title}</h2>
                {lostPswStep === 1 && <LostPsw1Step lostPswStep={lostPswStep} setLPStep={setLostPswStep}/>}
                {lostPswStep === 2 && <LostPsw2Step lostPswStep={lostPswStep} setLPStep={setLostPswStep}/>}
                {lostPswStep === 3 && <LostPsw3Step lostPswStep={lostPswStep} setLPStep={setLostPswStep}/>}
            </div>
        </section>
    );
}

export default LostPsw;