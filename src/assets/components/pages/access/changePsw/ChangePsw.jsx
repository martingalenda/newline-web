import { useForm } from 'react-hook-form';
import data from '../../../data/data.js'; 

const ChangePsw = () => {
    
    const changePsw = data.changePsw;

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => { console.log(data) }

    return(
        <section className="lostPsw access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{changePsw.title}</h2>
                <form className="changePsw__form" onSubmit={handleSubmit(onSubmit)}>

                        <input 
                            className="access__input" 
                            type="password" 
                            autoComplete="off" 
                            placeholder={changePsw.aPsw} 
                            {...register (
                                "antpassword",
                                { required: true,
                                minLength: 5,
                                maxLength: 25}
                            )} />
                        <span className="errorMsg">
                            {errors.antpassword?.type === 'required' && `${changePsw.required}`}
                            {errors.antpassword?.type === 'minLength' && `${changePsw.min} 5 ${changePsw.chars}`}
                            {errors.antpassword?.type === 'maxLength' && `${changePsw.max} 25 ${changePsw.chars}`}
                        </span>
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

                </form>
            </div>
        </section>
    );

}

export default ChangePsw;