import { useForm } from 'react-hook-form';
import {useContext} from 'react';
import LangContext from '../../../../context/LangContext';
// import LostPsw2Step from './LostPsw2Step.jsx';

const LostPsw1Step = ({lostPswStep, setLPStep}) => {
    
    const { texts } = useContext(LangContext);

    const {register, handleSubmit, formState: {errors}} = useForm();

    // Se requiere pasar al paso dos, y enviar el e-mail con el código de recuperación.
    const onSubmit = (data) => { 
        console.log(data)
        setLPStep(lostPswStep = 2)
    }

    return(
        <form className="lostPsw__form" onSubmit={handleSubmit(onSubmit)}>

            <div className="form__firstStep">
                <input 
                    className="access__input" 
                    type="email" 
                    placeholder={texts.lostPsw.email} 
                    {...register (
                        "email",
                        { required: true,
                        minLength: 6,
                        maxLength: 40,
                        pattern: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
                        }
                    )} />

                <span className="errorMsg">
                    {errors.email?.type === 'required' && `${texts.lostPsw.required}`}
                    {errors.email?.type === 'minLength' && `${texts.lostPsw.notEmail}`}
                    {errors.email?.type === 'maxLength' && `${texts.lostPsw.notEmail}`}
                    {errors.email?.type === 'pattern' && `${texts.lostPsw.notEmail}`}
                </span>
                
                <div className="btnD-container">                            
                    <input 
                        className="btnD-acc access__confirm" 
                        type="submit" 
                        value={texts.lostPsw.send} />
                </div>
            </div>

        </form>
    );
}

export default LostPsw1Step;