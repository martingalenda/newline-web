import React, {useState} from 'react';
/* import WOW from 'wowjs'; */
import { Link } from "react-router-dom"; // Enrutado
import logIn from './logIn.json'; 

const LogIn = () => {

    /* const newWOW = () => {new WOW.WOW().init();} 
    newWOW() */

    const [creds, setCreds] = useState({
        user: '',
        password: ''
    })
    
    const handleInputChange = (event) => {
        setCreds({
            ...creds,
            [event.target.name] : event.target.value
        })
    }

    const sendDates = (event) => {
        event.preventDefault();
        console.log(creds.user + ' ' + creds.password)
    }

    return(
        <section className="logIn access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{logIn.logIn.title}</h2>
                <form className="logIn__form" onSubmit={sendDates}>
                    <input 
                        className="access__input" 
                        type="text" 
                        autoComplete="off" 
                        placeholder={logIn.logIn.user} 
                        name="user" 
                        required
                        onChange={handleInputChange} />
                    <input 
                        className="access__input" 
                        type="password" 
                        autoComplete="off" 
                        placeholder={logIn.logIn.psw} 
                        name="password" 
                        required
                        onChange={handleInputChange} />
                    <Link to="/lostpsw">         
                        <span className="form__lostPsw access__redirect">{logIn.logIn.lostPsw}</span>
                    </Link>
                    <div className="btnD-container">
                        <input 
                            className="btnD-acc access__confirm" 
                            type="submit" 
                            value={logIn.logIn.logInBtn} />
                    </div>
                    <span className="form__signup">{logIn.logIn.haventAcc}
                        <Link to="/register">
                            <span className="access__redirect">{logIn.logIn.register}</span>
                        </Link>
                    </span>
                </form>
            </div>
        </section>
    );

}

export default LogIn;