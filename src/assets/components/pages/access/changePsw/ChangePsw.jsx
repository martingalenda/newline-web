// ? REDUX:
    import { useSelector } from 'react-redux';
// ? USE-FORM:
    import { useForm } from 'react-hook-form';
// ? RUTAS:
    import { Link } from "react-router-dom"; 
    // import { useNavigate } from "react-router-dom"; 
// ? MODALES:
    import Modal from "../../../globals/modals/Modal"
    import Notification from "../../../globals/modals/notifications/Notifications"
    import {useModals} from "../../../../hooks/useModals"


const ChangePsw = () => {

    const {texts} = useSelector(state => state.languages)
    const [isActiveN1, openN1, closeN1] = useModals()

    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    // Referencia al valor introducido en el input (password) en tiempo real
    const pw = watch('password')

    // const navigate = useNavigate()
    const onSubmit = (data) => { 
        //console.log(data) 
        openN1()
        // navigate("/") 
    }

    return(
        <section className="lostPsw access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{texts.changePsw.title}</h2>
                <form className="changePsw__form" onSubmit={handleSubmit(onSubmit)}>

                        <input 
                            className="access__input" 
                            type="password" 
                            autoComplete="off" 
                            placeholder={texts.changePsw.aPsw}
                            autoFocus
                            {...register (
                                "prevPsw",
                                { required: true,
                                minLength: 5,
                                maxLength: 25}
                            )} />
                        <span className="errorMsg">
                            {errors.prevPsw?.type === 'required' && `${texts.changePsw.required}`}
                            {errors.prevPsw?.type === 'minLength' && `${texts.changePsw.min} 5 ${texts.changePsw.chars}`}
                            {errors.prevPsw?.type === 'maxLength' && `${texts.changePsw.max} 25 ${texts.changePsw.chars}`}
                        </span>
                        <Link to="/lostpsw">         
                            <span className="form__lostPsw access__redirect">{texts.logIn.lostPsw}</span>
                        </Link>

                        <input 
                            className="access__input" 
                            type="password" 
                            autoComplete="off" 
                            placeholder={texts.changePsw.nPsw} 
                            {...register (
                                "password",
                                { required: true,
                                minLength: 5,
                                maxLength: 25}
                            )} />
                        <span className="errorMsg">
                            {errors.password?.type === 'required' && `${texts.changePsw.required}`}
                            {errors.password?.type === 'minLength' && `${texts.changePsw.min} 5 ${texts.changePsw.chars}`}
                            {errors.password?.type === 'maxLength' && `${texts.changePsw.max} 25 ${texts.changePsw.chars}`}
                        </span>
                        <input 
                            className="access__input" 
                            type="password" 
                            autoComplete="off" 
                            placeholder={texts.changePsw.rNPsw} 
                            {...register (
                                "rPassword",
                                { required: true,
                                minLength: 5,
                                maxLength: 25,
                                validate: (value) => value === pw
                                }
                            )} />
                        <span className="errorMsg">
                            {errors.rPassword?.type === 'required' && `${texts.changePsw.required}`}
                            {errors.rPassword?.type === 'minLength' && `${texts.changePsw.notPsw}`}
                            {errors.rPassword?.type === 'maxLength' && `${texts.changePsw.notPsw}`}
                            {errors.rPassword?.type === 'validate' && `${texts.changePsw.invalidPsw}`}
                        </span>
                            <div className="btnD-container">      
                                <input 
                                    className="btnD-acc access__confirm" 
                                    type="submit" 
                                    value={texts.changePsw.confirm} />
                            </div>

                </form>
            </div>

            {/* Notificación: Contraseña modificada de forma exitosa  */}
            <Modal active={isActiveN1} close={closeN1}>
                <Notification style={`success`} close={closeN1}> 
                    <p>{texts.lostPsw.pwChanged}</p>
                </Notification>
            </Modal> 
        </section>
    );

}

export default ChangePsw;