import React, {useState} from 'react';
/* import WOW from 'wowjs'; */
import lostPsw from './lostPass.json'; 

const LostPsw = () => {

    /* const newWOW = () => {new WOW.WOW().init();} 
    newWOW() */

    const [creds, setCreds] = useState({
        email: '',  
        code: '',
        password: '',
        rPassword: ''
    })
    
    const handleInputChange = (event) => {
        setCreds({
            ...creds,
            [event.target.name] : event.target.value
        })
    }

    const sendDates = (event) => {
        event.preventDefault();
        console.log(creds.email + ' ' + creds.code + ' ' + creds.password + ' ' + creds.rPassword)
    }


    return(
        <section className="lostPsw access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{lostPsw.lostPsw.title}</h2>
                <form className="lostPsw__form" onSubmit={sendDates}>

                    <div className="firstStep">
                        <input 
                            className="access__input" 
                            type="email" 
                            autoComplete="off" 
                            placeholder={lostPsw.lostPsw.email} 
                            name="email" 
                            required
                            onChange={handleInputChange} />
                        <div className="btnD-container">                            
                            <input 
                                className="btnD-acc access__confirm" 
                                type="submit" 
                                value={lostPsw.lostPsw.send} />
                        </div>
                    </div>

                    <div className="form__scndStep disNone">
                        <input 
                        className="access__input" 
                        type="text" 
                        autoComplete="off" 
                        placeholder={lostPsw.lostPsw.code} 
                        name="code" 
                        required
                        onChange={handleInputChange} />
                        <div className="btnD-container">      
                            <input 
                                className="btnD-acc access__confirm" 
                                type="submit" 
                                value={lostPsw.lostPsw.reSend} />
                        </div>
                    </div>

                    <div className="thirdStep disNone">
                        <input 
                            className="access__input" 
                            type="password" 
                            autoComplete="off" 
                            placeholder={lostPsw.lostPsw.nPsw} 
                            name="password" 
                            required
                            onChange={handleInputChange} />
                        <input 
                            className="access__input" 
                            type="password" 
                            autoComplete="off" 
                            placeholder={lostPsw.lostPsw.rNPsw} 
                            name="rPassword" 
                            required
                            onChange={handleInputChange} />
                            <div className="btnD-container">      
                                <input 
                                    className="btnD-acc access__confirm" 
                                    type="submit" 
                                    value={lostPsw.lostPsw.confirm} />
                            </div>
                    </div>

                </form>
            </div>
        </section>
    );

}

export default LostPsw;