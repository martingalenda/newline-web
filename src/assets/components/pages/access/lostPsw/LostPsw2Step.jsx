import { useForm } from 'react-hook-form';
import data from '../../../data/data.js'; 
// import LostPsw3Step from './LostPsw3Step.jsx';

const LostPsw2Step = () => {
    
    const lostPsw = data.lostPsw;

    const {register, handleSubmit, formState: {errors}} = useForm();

    // Se requiere validar si el código es correcto, y pasar al paso 3
    const onSubmit = (data) => { console.log(data) }

    return(
        <section className="lostPsw access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{lostPsw.title}</h2>
                <form className="lostPsw__form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form__scndStep">
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

                </form>
            </div>
        </section>
    );

}

export default LostPsw2Step;