import React from 'react';
/* import WOW from 'wowjs'; */
import { useForm } from 'react-hook-form';
import changePswTxt from './changePass.json'; 

const ChangePsw = () => {

    /* const newWOW = () => {new WOW.WOW().init();} 
    newWOW() */
    
    const changePsw = changePswTxt.changePsw;

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => { console.log(data) }

    return(
        <section className="lostPsw access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{changePsw.title}</h2>
                <form className="changePsw__form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="firstStep">
                        <input 
                            className="access__input" 
                            type="email" 
                            placeholder={changePsw.email} 
                            {...register (
                                "email",
                                { required: true,
                                minLength: 6,
                                maxLength: 40}
                            )} />
                        <span className="errorMsg">
                            {errors.email?.type === 'required' && `${changePsw.required}`}
                            {errors.email?.type === 'minLength' && `${changePsw.notEmail}`}
                            {errors.email?.type === 'maxLength' && `${changePsw.notEmail}`}
                        </span>
                        <div className="btnD-container">                            
                            <input 
                                className="btnD-acc access__confirm" 
                                type="submit" 
                                value={changePsw.send} />
                        </div>
                    </div>

                    <div className="form__scndStep disNone">
                        <input 
                        className="access__input" 
                        type="text" 
                        autoComplete="off" 
                        placeholder={changePsw.code} 
                        {...register (
                            "code",
                            { required: true,
                            minLength: 12,
                            maxLength: 12}
                        )} />
                    <span className="errorMsg">
                        {errors.code?.type === 'required' && `${changePsw.required}`}
                        {errors.code?.type === 'minLength' && `${changePsw.notCode}`}
                        {errors.code?.type === 'maxLength' && `${changePsw.notCode}`}
                    </span>
                        <div className="btnD-container">      
                            <input 
                                className="btnD-acc access__confirm" 
                                type="submit" 
                                value={changePsw.reSend} />
                        </div>
                    </div>

                    <div className="thirdStep disNone">
                        <input 
                            className="access__input" 
                            type="password" 
                            autoComplete="off" 
                            placeholder={changePsw.nPsw} 
                            {...register (
                                "password",
                                { required: true,
                                minLength: 5,
                                maxLength: 25}
                            )} />
                        <span className="errorMsg">
                            {errors.password?.type === 'required' && `${changePsw.required}`}
                            {errors.password?.type === 'minLength' && `${changePsw.min} 5 ${changePsw.chars}`}
                            {errors.password?.type === 'maxLength' && `${changePsw.max} 25 ${changePsw.chars}`}
                        </span>
                        <input 
                            className="access__input" 
                            type="password" 
                            autoComplete="off" 
                            placeholder={changePsw.rNPsw} 
                            {...register (
                                "rPassword",
                                { required: true,
                                minLength: 5,
                                maxLength: 25}
                            )} />
                        <span className="errorMsg">
                            {errors.rPassword?.type === 'required' && `${changePsw.required}`}
                            {errors.rPassword?.type === 'minLength' && `${changePsw.notPsw}`}
                            {errors.rPassword?.type === 'maxLength' && `${changePsw.notPsw}`}
                        </span>
                            <div className="btnD-container">      
                                <input 
                                    className="btnD-acc access__confirm" 
                                    type="submit" 
                                    value={changePsw.confirm} />
                            </div>
                    </div>

                </form>
            </div>
        </section>
    );

}

export default ChangePsw;