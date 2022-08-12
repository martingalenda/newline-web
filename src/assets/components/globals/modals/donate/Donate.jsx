import { useState, useContext } from 'react';
import LangContext from '../../../../context/LangContext';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

const Donate = ({show, setShow}) =>{

    const { texts } = useContext(LangContext);

    let [reward] = useState(0);

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => { 
        console.log(data) 
    }

    return( 
        <section className={`modal__container donations`}>
            <button className="modal__x" onClick={() => setShow(!show)}>X</button>

            <div className="container__items">
                <h3>{texts.modals.donate.donations}</h3>
                <form className="donation__form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="items__form">
                        <label>{texts.modals.donate.contributions}</label>
                        <input className="form__mount" 
                            type="text"
                            {...register (
                                "mount",
                                { required: true,
                                maxLength: 9,
                                pattern: /^[0-9]+$/i}
                            )} />
                    </div>

                    <div className="items__form">
                        <label>{texts.modals.donate.media}</label>
                        <select className="form__coins" 
                            defaultValue="usd"
                            {...register (
                                "coin"
                            )}>
                            <option value="usd">USD</option>
                            <option value="usdt">USDT</option>
                            <option value="btc">BTC</option>
                            <option value="arg">ARG</option>
                        </select>
                    </div>

                    <div className="items__form">
                        <span>{texts.modals.donate.reward}</span>
                        <span className="rewards">{reward} NLCoins</span>
                    </div>

                    <span className="errorMsg">
                        {errors.mount?.type === 'required' && `${texts.modals.donate.required}`}
                        {errors.mount?.type === 'maxLength' && `${texts.modals.donate.max}`}
                        {errors.mount?.type === 'pattern' && `${texts.modals.donate.invalid}`}
                    </span>

                    <div className="access__terms">
                        <div className="checkBox">
                            <input 
                                id="checkTerms"
                                type="checkbox"
                                className="checkOK"
                                required
                                {...register (
                                    "checkTerms"
                                )}
                            /> 
                            <label htmlFor="checkTerms" className="label terms__btn"/>
                        </div>
                        <span>{texts.register.accept}</span>
                        <Link to="/terms">
                            <span className="access__redirect">{texts.register.terms}</span>
                        </Link>
                    </div>

                    <div className="btnD-container">
                        <input 
                            className="btnD-Donate access__confirm" 
                            type="submit" 
                            value={texts.modals.donate.donate} />  
                    </div>

                </form>
            </div>
        </section>
    );
}

export default Donate;