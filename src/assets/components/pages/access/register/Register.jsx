import { Link } from "react-router-dom"; // Enrutado
import { useForm } from 'react-hook-form';
import data from '../../../data/data.js';

const Register = () => {

    const regs = data.register;

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => { console.log(data) }

    return(
        <section className="register access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{regs.title}</h2>
                <form className="register__form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form__firstStep">
                        <input 
                            className="access__input" 
                            type="email" 
                            placeholder={regs.email} 
                            {...register (
                                "email",
                                { required: true,
                                minLength: 6,
                                maxLength: 40}
                            )} />
                        <span className="errorMsg">
                            {errors.email?.type === 'required' && `${regs.required}`}
                            {errors.email?.type === 'minLength' && `${regs.notEmail}`}
                            {errors.email?.type === 'maxLength' && `${regs.notEmail}`}
                        </span>

                        <input 
                            className="access__input" 
                            type="text" 
                            autoComplete="off" 
                            placeholder={regs.user} 
                            {...register (
                                "userName",
                                { required: true,
                                minLength: 5,
                                maxLength: 20,
                                pattern: /^[A-Za-z0-9]+$/i}
                            )} />
                        <span className="errorMsg">
                            {errors.userName?.type === 'required' && `${regs.required}`}
                            {errors.userName?.type === 'minLength' && `${regs.min} 5 ${regs.chars}`}
                            {errors.userName?.type === 'maxLength' && `${regs.max} 20 ${regs.chars}`}
                            {errors.userName?.type === 'pattern' && `${regs.notSymb}`} 
                        </span>

                        <input 
                            className="access__input" 
                            type="text" 
                            autoComplete="off" 
                            placeholder={regs.char} 
                            {...register (
                                "charName",
                                { required: true,
                                minLength: 4,
                                maxLength: 16,
                                pattern: /^[A-Za-z0-9]+$/i}
                            )} />
                        <span className="errorMsg">
                            {errors.charName?.type === 'required' && `${regs.required}`}
                            {errors.charName?.type === 'minLength' && `${regs.min} 4 ${regs.chars}`}
                            {errors.charName?.type === 'maxLength' && `${regs.max} 16 ${regs.chars}`}
                            {errors.charName?.type === 'pattern' && `${regs.notSymb}`} 
                        </span>

                        <div className="btnD-container">
                            <input 
                                className="btnD-acc access__confirm" 
                                type="submit" 
                                value={regs.next} />
                        </div>

                        <span className="form__login">{regs.haveAcc}
                            <Link to="/login">
                                <span className="access__redirect">{regs.login}</span>
                            </Link>
                        </span>
                    </div>

                    <div className="form__scndStep disNone">
                        <input 
                            className="access__input" 
                            type="password" 
                            autoComplete="off" 
                            placeholder={regs.psw} 
                            {...register (
                                "password",
                                { required: true,
                                minLength: 5,
                                maxLength: 25}
                            )} />
                        <span className="errorMsg">
                            {errors.password?.type === 'required' && `${regs.required}`}
                            {errors.password?.type === 'minLength' && `${regs.min} 5 ${regs.chars}`}
                            {errors.password?.type === 'maxLength' && `${regs.max} 25 ${regs.chars}`}
                        </span>

                        <input 
                            className="access__input" 
                            type="password" 
                            autoComplete="off" 
                            placeholder={regs.rPsw} 
                            {...register (
                                "rPassword",
                                { required: true,
                                minLength: 5,
                                maxLength: 25 }
                            )} />
                        <span className="errorMsg">
                            {errors.rPassword?.type === 'required' && `${regs.required}`}
                            {errors.rPassword?.type === 'minLength' && `${regs.notPsw}`}
                            {errors.rPassword?.type === 'maxLength' && `${regs.notPsw}`} 

                        </span>

                        <div className="access__terms">
                            <div className="checkBox">
                                <input id="checkOK" type="checkbox" required/> 
                                <label htmlFor="checkOK" className="label terms__btn"></label>
                            </div>
                            <span>{regs.accept}</span>
                            <Link to="/terms">
                                <span className="access__redirect">{regs.terms}</span>
                            </Link>
                        </div>
                        
                        <div className="btnD-container">
                            <input 
                                className="btnD-acc access__confirm" 
                                type="submit" 
                                value={regs.regInBtn} />  
                        </div>
                    </div>

                </form>
            </div>
        </section>
    );

}

export default Register;