import {useContext} from 'react';
import LangContext from '../../../../context/LangContext';
import { useForm } from 'react-hook-form';

const ChangePsw = () => {
    
    const { texts } = useContext(LangContext);

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => { console.log(data) }

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
                                maxLength: 25}
                            )} />
                        <span className="errorMsg">
                            {errors.rPassword?.type === 'required' && `${texts.changePsw.required}`}
                            {errors.rPassword?.type === 'minLength' && `${texts.changePsw.notPsw}`}
                            {errors.rPassword?.type === 'maxLength' && `${texts.changePsw.notPsw}`}
                        </span>
                            <div className="btnD-container">      
                                <input 
                                    className="btnD-acc access__confirm" 
                                    type="submit" 
                                    value={texts.changePsw.confirm} />
                            </div>

                </form>
            </div>
        </section>
    );

}

export default ChangePsw;