import { useForm } from 'react-hook-form';
import {useContext} from 'react';
import LangContext from '../../../../context/LangContext';
// import LostPsw3Step from './LostPsw3Step.jsx';

const LostPsw2Step = ({lostPswStep, setLPStep}) => {
    
    const { texts } = useContext(LangContext);

    const {register, handleSubmit, formState: {errors}} = useForm();

    // Se requiere validar si el código es correcto, y pasar al paso 3
    const onSubmit = (data) => { 
        console.log(data)
        setLPStep(lostPswStep = 3)
     }

    return(
        <form className="lostPsw__form" onSubmit={handleSubmit(onSubmit)}>

            <div className="form__scndStep">
                <input 
                    className="access__input" 
                    type="text" 
                    autoComplete="off" 
                    placeholder={texts.lostPsw.code} 
                    {...register (
                        "code",
                        { required: true,
                        minLength: 12,
                        maxLength: 12}
                    )} />
                
                <span className="errorMsg">
                    {errors.code?.type === 'required' && `${texts.lostPsw.required}`}
                    {errors.code?.type === 'minLength' && `${texts.lostPsw.notCode}`}
                    {errors.code?.type === 'maxLength' && `${texts.lostPsw.notCode}`}
                </span>

                <div className="btnD-container">      
                    <input 
                        className="btnD-acc access__confirm" 
                        type="submit" 
                        value={texts.lostPsw.confirm} />
                </div>
            </div>

        </form>
    );
}

export default LostPsw2Step;