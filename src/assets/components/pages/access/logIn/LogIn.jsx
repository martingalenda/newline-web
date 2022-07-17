import { Link } from "react-router-dom"; // Enrutado
import data from '../../../data/data.js';
import { useForm } from 'react-hook-form';

const LogIn = () => {

    const logIn = data.logIn;

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => { console.log(data) }

    return(
        <section className="logIn access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{logIn.title}</h2>

                <form className="logIn__form" onSubmit={handleSubmit(onSubmit)}>

                    <input 
                        className="access__input" 
                        type="text" 
                        autoComplete="off" 
                        placeholder={logIn.user} 
                        {...register (
                            "user",
                            { required: true,
                            minLength: 5,
                            maxLength: 20,
                            pattern: /^[A-Za-z0-9]+$/i}
                        )} />
                    <span className="errorMsg">
                        {errors.user?.type === 'required' && `${logIn.required}`}
                        {errors.user?.type === 'minLength' && `${logIn.notUser}`}
                        {errors.user?.type === 'maxLength' && `${logIn.notUser}`}
                        {errors.user?.type === 'pattern' && `${logIn.notSymb}`}
                    </span>

                    <input 
                        className="access__input" 
                        type="password" 
                        autoComplete="off" 
                        placeholder={logIn.psw} 
                        {...register (
                            "psw",
                            { required: true,
                            minLength: 5,
                            maxLength: 25}
                        )} />
                    <span className="errorMsg">
                        {errors.psw?.type === 'required' && `${logIn.required}`}
                        {errors.psw?.type === 'minLength' && `${logIn.notPsw}`}
                        {errors.psw?.type === 'maxLength' && `${logIn.notPsw}`}
                    </span>
                    <Link to="/lostpsw">         
                        <span className="form__lostPsw access__redirect">{logIn.lostPsw}</span>
                    </Link>

                    <div className="btnD-container">
                        <input 
                            className="btnD-acc access__confirm" 
                            type="submit" 
                            value={logIn.logInBtn} />
                    </div>
                    <div className="access__remember">
                            <div className="checkBox">
                                <input id="checkOK" type="checkbox"/> 
                                <label htmlFor="checkOK" className="label terms__btn"></label>
                            </div>
                            <span>{logIn.remember}</span>
                    </div>

                </form>
            </div>
        </section>
    );
}

export default LogIn;