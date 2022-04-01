import React from 'react';
import { useForm } from 'react-hook-form';
import lostPswTxt from './lostPass.json'; 

const LostPsw = () => {
    
    const lostPsw = lostPswTxt.lostPsw;

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => { console.log(data) }

    return(
        <section className="lostPsw access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{lostPsw.title}</h2>
                <form className="lostPsw__form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="firstStep">
                        <input 
                            className="access__input" 
                            type="email" 
                            placeholder={lostPsw.email} 
                            {...register (
                                "email",
                                { required: true,
                                minLength: 6,
                                maxLength: 40}
                            )} />
                        <span className="errorMsg">
                            {errors.email?.type === 'required' && `${lostPsw.required}`}
                            {errors.email?.type === 'minLength' && `${lostPsw.notEmail}`}
                            {errors.email?.type === 'maxLength' && `${lostPsw.notEmail}`}
                        </span>
                        <div className="btnD-container">                            
                            <input 
                                className="btnD-acc access__confirm" 
                                type="submit" 
                                value={lostPsw.send} />
                        </div>
                    </div>

                    <div className="form__scndStep disNone">
                        <input 
                        className="access__input" 
                        type="text" 
                        autoComplete="off" 
                        placeholder={lostPsw.code} 
                        {...register (
                            "code",
                            { required: true,
                            minLength: 12,
                            maxLength: 12}
                        )} />
                    <span className="errorMsg">
                        {errors.code?.type === 'required' && `${lostPsw.required}`}
                        {errors.code?.type === 'minLength' && `${lostPsw.notCode}`}
                        {errors.code?.type === 'maxLength' && `${lostPsw.notCode}`}
                    </span>
                        <div className="btnD-container">      
                            <input 
                                className="btnD-acc access__confirm" 
                                type="submit" 
                                value={lostPsw.reSend} />
                        </div>
                    </div>

                    <div className="thirdStep disNone">
                        <input 
                            className="access__input" 
                            type="password" 
                            autoComplete="off" 
                            placeholder={lostPsw.nPsw} 
                            {...register (
                                "password",
                                { required: true,
                                minLength: 5,
                                maxLength: 25}
                            )} />
                        <span className="errorMsg">
                            {errors.password?.type === 'required' && `${lostPsw.required}`}
                            {errors.password?.type === 'minLength' && `${lostPsw.min} 5 ${lostPsw.chars}`}
                            {errors.password?.type === 'maxLength' && `${lostPsw.max} 25 ${lostPsw.chars}`}
                        </span>
                        <input 
                            className="access__input" 
                            type="password" 
                            autoComplete="off" 
                            placeholder={lostPsw.rNPsw} 
                            {...register (
                                "rPassword",
                                { required: true,
                                minLength: 5,
                                maxLength: 25}
                            )} />
                        <span className="errorMsg">
                            {errors.rPassword?.type === 'required' && `${lostPsw.required}`}
                            {errors.rPassword?.type === 'minLength' && `${lostPsw.notPsw}`}
                            {errors.rPassword?.type === 'maxLength' && `${lostPsw.notPsw}`}
                        </span>
                            <div className="btnD-container">      
                                <input 
                                    className="btnD-acc access__confirm" 
                                    type="submit" 
                                    value={lostPsw.confirm} />
                            </div>
                    </div>

                </form>
            </div>
        </section>
    );

}

export default LostPsw;