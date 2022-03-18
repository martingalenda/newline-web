import React from 'react';
import WOW from 'wowjs';
import logIn from './logIn.json';

const LogIn = () => {

    const newWOW = () => {new WOW.WOW().init();}
    newWOW()

    return(
        <section className="logIn wow animate__fadeIn" data-wow-duration="3.5s">
            <h2 className="logIn__title">{logIn.logIn.title}</h2>
            <form className="logIn__form" action="#">
                <input className="form__input" type="text" autocomplete="off" placeholder="User" name="user" required/>
                <input className="form__input" type="password" autocomplete="off" placeholder="Password" name="psw" required/>
                <a href="google.com">{logIn.logIn.lostPsw}</a>
                <input className="form__logInBtn btnC-dLogin" type="submit" value="Iniciar sesión" name="logInBtn"/>
                <span className="form__signup">{logIn.logIn.haventAcc} <a href="google.com">{logIn.logIn.register}</a></span>
            </form>
        </section>
    );

}

export default LogIn;