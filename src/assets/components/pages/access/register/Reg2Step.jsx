import { Link } from "react-router-dom"; // Enrutado
import { useForm } from 'react-hook-form';
import data from '../../../data/data.js';

const Reg2Step = () => {

    const regs = data.register;

    const {register, handleSubmit, formState: {errors}} = useForm();
    // Se requiere registrar los datos en la base de datos
    const onSubmit = (data) => { console.log(data) }

    return(
        <form className="register__form" onSubmit={handleSubmit(onSubmit)}>

            <div className="form__scndStep">
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
                        <input id="checkTerms" 
                        type="checkbox"
                        className="checkOK"
                        required
                        {...register (
                        "checkTerms"
                        )}
                        /> 
                        <label htmlFor="checkTerms" className="label terms__btn"></label>
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
    );

}

export default Reg2Step;