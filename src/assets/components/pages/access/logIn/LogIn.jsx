import { Link } from "react-router-dom"; // Enrutado
import {useContext} from 'react';
import LangContext from '../../../../context/LangContext';
import { useForm } from 'react-hook-form';

const LogIn = () => {

    const { texts } = useContext(LangContext);

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => { console.log(data) }

    return(
        <section className="logIn access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{texts.logIn.title}</h2>

                <form className="logIn__form" onSubmit={handleSubmit(onSubmit)}>

                    <input 
                        className="access__input" 
                        type="text" 
                        autoComplete="off" 
                        placeholder={texts.logIn.user} 
                        {...register (
                            "user",
                            { required: true,
                            minLength: 5,
                            maxLength: 20,
                            pattern: /^[A-Za-z0-9]+$/i}
                        )} />
                    <span className="errorMsg">
                        {errors.user?.type === 'required' && `${texts.logIn.required}`}
                        {errors.user?.type === 'minLength' && `${texts.logIn.notUser}`}
                        {errors.user?.type === 'maxLength' && `${texts.logIn.notUser}`}
                        {errors.user?.type === 'pattern' && `${texts.logIn.notSymb}`}
                    </span>

                    <input 
                        className="access__input" 
                        type="password" 
                        autoComplete="off" 
                        placeholder={texts.logIn.psw} 
                        {...register (
                            "psw",
                            { required: true,
                            minLength: 5,
                            maxLength: 25}
                        )} />
                    <span className="errorMsg">
                        {errors.psw?.type === 'required' && `${texts.logIn.required}`}
                        {errors.psw?.type === 'minLength' && `${texts.logIn.notPsw}`}
                        {errors.psw?.type === 'maxLength' && `${texts.logIn.notPsw}`}
                    </span>
                    <Link to="/lostpsw">         
                        <span className="form__lostPsw access__redirect">{texts.logIn.lostPsw}</span>
                    </Link>

                    <div className="btnD-container">
                        <input 
                            className="btnD-acc access__confirm" 
                            type="submit" 
                            value={texts.logIn.logInBtn} />
                    </div>
                    <div className="access__remember">
                        <div className="checkBox">
                            <input id="rememberMe" 
                            className="disNone checkOK" 
                            type="checkbox"
                            {...register (
                                "rememberMe"
                            )}
                            /> 
                            <label htmlFor="rememberMe" className="label terms__btn"></label>
                        </div>
                        <span>{texts.logIn.remember}</span>
                    </div>

                </form>
            </div>
        </section>
    );
}

export default LogIn;