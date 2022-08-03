import { useForm } from 'react-hook-form';
import data from '../../../data/data.js'; 

const LostPsw3Step = () => {
    
    const lostPsw = data.lostPsw;

    const {register, handleSubmit, formState: {errors}} = useForm();

    // Se requiere validar la repetición de contraseñas, actualizarla en la DB, e iniciar sesión.
    const onSubmit = (data) => { console.log(data) }

    return(
        <section className="lostPsw access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{lostPsw.title}</h2>
                <form className="lostPsw__form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form__thirdStep">
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

export default LostPsw3Step;