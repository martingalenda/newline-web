import {useContext, useState} from 'react';
import LangContext from '../../../../context/LangContext';
import { Link /*,  useNavigate */ } from "react-router-dom"; 
import { useRef } from "react";
import { useForm } from 'react-hook-form';
import ButtonC from '../../../globals/buttons/classicBtn/ButtonC';
 
const Reg2Step = ({regStep, setRegStep, openN2}) => {

    const { texts } = useContext(LangContext);

    const [title, setTitle] = useState(texts.register.terms)

    const terms = useRef()
    const scndStep = useRef()

    const {register, handleSubmit, watch, formState: {errors} } = useForm();

    // Referencia al valor introducido en el input (password) en tiempo real
    const pw = watch('password')
    
    // const navigate = useNavigate()
    const onSubmit = (data) => {  
        //console.log(data) 
        openN2()
        setRegStep(regStep = 1)
        // navigate("/")
    } 

    const resendCode = () => {
        alert(texts.register.checkEmail)
    }
    
    const showTerms = () => {
        scndStep.current.style.display = "none"
        terms.current.style.display = "block"
        setTitle(texts.register.terms)
    }
    const backTerms = () => {
        terms.current.style.display = "none"
        scndStep.current.style.display = "block"
        setTitle(texts.modals.donate.donations)
    }

    return(
        <>
            <form ref={scndStep} className="register__form" onSubmit={handleSubmit(onSubmit)}>

                <div className="form__scndStep">
                    <div className="code__container">
                        <input 
                            className="access__input" 
                            type="text" 
                            placeholder={texts.register.code} 
                            autoFocus
                            {...register (
                                "codeConfirm",
                                { required: true,
                                minLength: 8,
                                maxLength: 8}
                            )} />
                        <span className="access__redirect resendCode" onClick={resendCode}>{texts.lostPsw.resendCode}</span>
                    </div>

                    <span className="errorMsg">
                        {errors.codeConfirm?.type === 'required' && `${texts.register.required}`}
                        {errors.codeConfirm?.type === 'minLength' && `${texts.register.min} 8 ${texts.register.chars}`}
                        {errors.codeConfirm?.type === 'maxLength' && `${texts.register.max} 8 ${texts.register.chars}`}
                    </span>

                    <input 
                        className="access__input" 
                        type="password" 
                        autoComplete="off" 
                        placeholder={texts.register.psw} 
                        {...register (
                            "password",
                            { required: true,
                            minLength: 5,
                            maxLength: 25,
                            }
                        )} />
                    <span className="errorMsg">
                        {errors.password?.type === 'required' && `${texts.register.required}`}
                        {errors.password?.type === 'minLength' && `${texts.register.min} 5 ${texts.register.chars}`}
                        {errors.password?.type === 'maxLength' && `${texts.register.max} 25 ${texts.register.chars}`}
                    </span>

                    <input 
                        className="access__input" 
                        type="password" 
                        autoComplete="off" 
                        placeholder={texts.register.rPsw}
                        {...register (
                            "rPassword",
                            { required: true,
                            minLength: 5,
                            maxLength: 25,
                            validate: (value) => value === pw
                            }
                        )} />
                    <span className="errorMsg">
                        {errors.rPassword?.type === 'required' && `${texts.register.required}`}
                        {errors.rPassword?.type === 'minLength' && `${texts.register.notPsw}`}
                        {errors.rPassword?.type === 'maxLength' && `${texts.register.notPsw}`} 
                        {errors.rPassword?.type === 'validate' && `${texts.changePsw.invalidPsw}`}
                    </span>

                    <div className="access__terms">
                        <div className="checkBox">
                            <input id="checkTerms" 
                            type="checkbox"
                            className="checkOK"
                            required
                            {...register (
                                "checkTerms", 
                                { required: true }
                            )}
                            /> 
                            <label htmlFor="checkTerms" className="label terms__btn"></label>
                        </div> 
                        <span>{texts.register.accept}</span>
                        <Link onClick={showTerms} to="#">
                            <span className="access__redirect">{texts.register.terms}</span>
                        </Link>
                    </div>
                    
                    <div className="btnD-container">
                        <input 
                            className="btnD-acc access__confirm" 
                            type="submit" 
                            value={texts.register.regInBtn} />  
                    </div>
                </div>

            </form>

            <div ref={terms} className="terms_conditions">
                <h3>{title}</h3>
                <p className="terms_coinditions--text" dangerouslySetInnerHTML={{__html: texts.modals.donate.terms}}></p>  
                <ButtonC myOnClick={() => backTerms()} btnClass="backTerms" text="OK"/>         
            </div>
        </>
    );

}

export default Reg2Step;