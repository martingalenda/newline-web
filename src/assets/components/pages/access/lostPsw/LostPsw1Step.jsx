import { useForm } from 'react-hook-form';
import data from '../../../data/data.js'; 
// import LostPsw2Step from './LostPsw2Step.jsx';

const LostPsw1Step = () => {
    
    const lostPsw = data.lostPsw;

    const {register, handleSubmit, formState: {errors}} = useForm();

    // Se requiere pasar al paso dos, y enviar el e-mail con el código de recuperación.
    const onSubmit = (data) => { console.log(data) }

    return(
        <section className="lostPsw access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{lostPsw.title}</h2>
                <form className="lostPsw__form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form__firstStep">
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

                </form>
            </div>
        </section>
    );

}

export default LostPsw1Step;