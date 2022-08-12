import {useState, useContext} from 'react';
import LangContext from '../../../../context/LangContext';
import { Link } from "react-router-dom"; 
import { useForm } from 'react-hook-form';
import Modal from '../../../globals/modals/Modal.jsx';
import Notifications from '../../../globals/modals/notifications/Notifications.jsx';

const Reg2Step = ({regStep, setRegStep}) => {

    const { texts } = useContext(LangContext);

    // Pensar si no conviene poner las variables de esta notificación dentro de un "helper"
    // Para que quede más ordenado
    const [show, setShow] = useState(true);
    const notSuccess = 
        <Modal show={show} setShow={setShow}>
            <Notifications show={show} setShow={setShow} style={`success`}> 
                <h2>{texts.modals.register.success}</h2>
                <p>{texts.modals.register.successP}</p>
            </Notifications>
        </Modal> 

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => { 
        console.log(data) 
        setRegStep(regStep = 1)
        console.log(notSuccess)
    }

    return(
        <form className="register__form" onSubmit={handleSubmit(onSubmit)}>

            <div className="form__scndStep">
                <input 
                    className="access__input" 
                    type="text" 
                    placeholder={texts.register.code} 
                    {...register (
                        "codeConfirm",
                        { required: true,
                        minLength: 8,
                        maxLength: 8}
                    )} />
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
                        maxLength: 25}
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
                        onBlur: (e) => {
                            console.error("Necesito validar que ambas contraseñas coincidan")
                            }
                        }
                    )} />
                <span className="errorMsg">
                    {errors.rPassword?.type === 'required' && `${texts.register.required}`}
                    {errors.rPassword?.type === 'minLength' && `${texts.register.notPsw}`}
                    {errors.rPassword?.type === 'maxLength' && `${texts.register.notPsw}`} 
                    {errors.rPassword?.type === 'onBlur' && `${texts.register.notPsw}`} 
                </span>

                <div className="access__terms">
                    <div className="checkBox">
                        <input id="checkTerms" 
                        type="checkbox"
                        className="checkOK"
                        required
                        {...register (
                            "checkTerms"
                        )}
                        /> 
                        <label htmlFor="checkTerms" className="label terms__btn"></label>
                    </div> 
                    <span>{texts.register.accept}</span>
                    <Link to="/terms">
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
    );

}

export default Reg2Step;