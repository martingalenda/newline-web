import { Link } from "react-router-dom"; // Enrutado
import { useForm } from 'react-hook-form';
import data from '../../../data/data.js';
import Reg2Step from "./Reg2Step.jsx";

const Reg1Step = () => {

    const regs = data.register;

    const {register, handleSubmit, formState: {errors}} = useForm();
    // Se requiere pasar al 2step
    const onSubmit = (data) => { 
        console.log(data) 
    } 

    return(
        <>

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
                            value={regs.next}
                            />
                    </div>

                    <span className="form__login">{regs.haveAcc}
                        <Link to="/login">
                            <span className="access__redirect">{regs.login}</span>
                        </Link>
                    </span>
                </div>

            </form>

            <Reg2Step/>
        </>
    );

}

export default Reg1Step;