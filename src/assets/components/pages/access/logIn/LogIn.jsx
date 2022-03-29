import React from 'react';
/* import WOW from 'wowjs';  */
import { Link } from "react-router-dom"; // Enrutado
import logInTxt from './logIn.json';
import { useForm } from 'react-hook-form';

const LogIn = () => {

/*  const newWOW = () => {new WOW.WOW().init();} 
    newWOW() */
    const logIn = logInTxt.logIn;

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => { console.log(data) }

    return(
        <section className="logIn access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{logIn.title}</h2>

                <form className="logIn__form" onSubmit={handleSubmit(onSubmit)}>

                    <input 
                        className="access__input" 
                        type="text" 
                        autoComplete="off" 
                        placeholder={logIn.user} 
                        {...register (
                            "user",
                            { required: true,
                            minLength: 5,
                            maxLength: 20}
                        )} />
                    <span className="errorMsg">
                        {errors.user?.type === 'required' && `${logIn.required}`}
                        {errors.user?.type === 'minLength' && `${logIn.notUser}`}
                        {errors.user?.type === 'maxLength' && `${logIn.notUser}`}
                    </span>

                    <input 
                        className="access__input" 
                        type="password" 
                        autoComplete="off" 
                        placeholder={logIn.psw} 
                        {...register (
                            "psw",
                            { required: true,
                            minLength: 5,
                            maxLength: 25}
                        )} />
                    <span className="errorMsg">
                        {errors.psw?.type === 'required' && `${logIn.required}`}
                        {errors.psw?.type === 'minLength' && `${logIn.notPsw}`}
                        {errors.psw?.type === 'maxLength' && `${logIn.notPsw}`}
                    </span>
                    <Link to="/lostpsw">         
                        <span className="form__lostPsw access__redirect">{logIn.lostPsw}</span>
                    </Link>

                    <div className="btnD-container">
                        <input 
                            className="btnD-acc access__confirm" 
                            type="submit" 
                            value={logIn.logInBtn} />
                    </div>
                    <span className="form__signup">{logIn.haventAcc}
                        <Link to="/register">
                            <span className="access__redirect">{logIn.register}</span>
                        </Link>
                    </span>

                </form>
            </div>
        </section>
    );
}

export default LogIn;