import { useForm } from 'react-hook-form';
import {useContext} from 'react';
import LangContext from '../../../../context/LangContext';

const LostPsw3Step = ({lostPswStep, setLPStep}) => {
    
    const { texts } = useContext(LangContext);

    const {register, handleSubmit, formState: {errors}} = useForm();

    // Se requiere validar la repetición de contraseñas, actualizarla en la DB, e iniciar sesión.
    const onSubmit = (data) => { 
        console.log(data)
        setLPStep(lostPswStep = 1)
    }

    return(
        <form className="lostPsw__form" onSubmit={handleSubmit(onSubmit)}>

            <div className="form__thirdStep">
                <input 
                    className="access__input" 
                    type="password" 
                    autoComplete="off" 
                    placeholder={texts.lostPsw.nPsw} 
                    {...register (
                        "password",
                        { required: true,
                        minLength: 5,
                        maxLength: 25}
                    )} />

                <span className="errorMsg">
                    {errors.password?.type === 'required' && `${texts.lostPsw.required}`}
                    {errors.password?.type === 'minLength' && `${texts.lostPsw.min} 5 ${texts.lostPsw.chars}`}
                    {errors.password?.type === 'maxLength' && `${texts.lostPsw.max} 25 ${texts.lostPsw.chars}`}
                </span>
                
                <input 
                    className="access__input" 
                    type="password" 
                    autoComplete="off" 
                    placeholder={texts.lostPsw.rNPsw} 
                    {...register (
                        "rPassword",
                        { required: true,
                        minLength: 5,
                        maxLength: 25,
                        onBlur: (e) => {
                            console.error("Necesito validar que ambas contraseñas coincidan")
                            }
                        }
                    )} />

                <span className="errorMsg">
                    {errors.rPassword?.type === 'required' && `${texts.lostPsw.required}`}
                    {errors.rPassword?.type === 'minLength' && `${texts.lostPsw.notPsw}`}
                    {errors.rPassword?.type === 'maxLength' && `${texts.lostPsw.notPsw}`}
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

export default LostPsw3Step;