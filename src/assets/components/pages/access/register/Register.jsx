import React, {useState} from 'react';
/* import WOW from 'wowjs'; */
import { Link } from "react-router-dom"; // Enrutado
import register from './register.json'; 

const Register = () => {

    /* const newWOW = () => {new WOW.WOW().init();} 
    newWOW() */

    const [creds, setCreds] = useState({
        email: '',
        userName: '',
        charName: '',
        password: '',
        rPassword: '',
    });

    const [terms, setTerms] = useState(false);
    
    const handleInputChange = (event) => {
        setCreds({
            ...creds,
            [event.target.name] : event.target.value
        })
    };

    const sendDates = (event) => {
        event.preventDefault();
        console.log(creds.email + ' ' + creds.userName + ' ' + creds.charName + ' ' + creds.password + ' ' + creds.rPassword + ' ' + terms )
    };


    return(
        <section className="register access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{register.register.title}</h2>
                <form className="register__form" onSubmit={sendDates}>
                    <div className="form__firstStep">
                        <input 
                            className="access__input" 
                            type="email" 
                            placeholder={register.register.email} 
                            name="email" 
                            required
                            onChange={handleInputChange} />
                        <input 
                            className="access__input" 
                            type="text" 
                            autoComplete="off" 
                            placeholder={register.register.user} 
                            name="userName" 
                            required
                            onChange={handleInputChange} />
                        <input 
                            className="access__input" 
                            type="text" 
                            autoComplete="off" 
                            placeholder={register.register.char} 
                            name="charName" 
                            required
                            onChange={handleInputChange} />
                        <div className="btnD-container">
                            <input 
                                className="btnD-acc access__confirm" 
                                type="submit" 
                                value={register.register.next} />
                        </div>
                        <span className="form__login">{register.register.haveAcc}
                            <Link to="/login">
                                <span className="access__redirect">{register.register.login}</span>
                            </Link>
                        </span>
                    </div>
                    <div className="form__scndStep disNone">
                        <input 
                            className="access__input" 
                            type="password" 
                            autoComplete="off" 
                            placeholder={register.register.psw} 
                            name="password" 
                            required
                            onChange={handleInputChange} />
                        <input 
                            className="access__input" 
                            type="rPassword" 
                            autoComplete="off" 
                            placeholder={register.register.rPsw} 
                            name="rPassword" 
                            required
                            onChange={handleInputChange} />
                        <div className="btnD-container">
                            <input 
                                className="btnD-acc access__confirm" 
                                type="submit" 
                                value={register.register.regInBtn} />  
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );

}

export default Register;