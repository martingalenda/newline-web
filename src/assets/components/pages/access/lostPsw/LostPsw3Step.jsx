// ? USE-FORM:
    import { useForm } from 'react-hook-form';
// ? REDUX:
    import { useSelector } from 'react-redux';
// ? RUTAS:
    // import { useNavigate } from "react-router-dom";

const LostPsw3Step = ({lostPswStep, setLPStep, openN2}) => {
    
    const {texts} = useSelector(state => state.languages)

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    
    // Referencia al valor introducido en el input (password) en tiempo real
    const pw = watch('password')
    
    // const navigate = useNavigate()
    const onSubmit = (data) => { 
        // console.log(data)
        setLPStep(lostPswStep = 1)
        openN2()
        //navigate("/login")
    }

    return(
        <form className="lostPsw__form" onSubmit={handleSubmit(onSubmit)}>

            <div className="form__thirdStep">
                <input 
                    className="access__input" 
                    type="password" 
                    autoComplete="off" 
                    placeholder={texts.lostPsw.nPsw}
                    autoFocus
                    {...register (
                        "password",
                        { required: true,
                        minLength: 5,
                        maxLength: 25}
                    )} />

                <span className="errorMsg">
                    {errors.password?.type === 'required' && `${texts.lostPsw.required}`}
                    {errors.password?.type === 'minLength' && `${texts.lostPsw.min} 5 ${texts.lostPsw.chars}`}
                    {errors.password?.type === 'maxLength' && `${texts.lostPsw.max} 25 ${texts.lostPsw.chars}`}
                </span>
                
                <input 
                    className="access__input" 
                    type="password" 
                    autoComplete="off" 
                    placeholder={texts.lostPsw.rNPsw} 
                    {...register (
                        "rPassword",
                        { required: true,
                        minLength: 5,
                        maxLength: 25,
                        validate: (value) => value === pw
                        }
                    )} />

                <span className="errorMsg">
                    {errors.rPassword?.type === 'required' && `${texts.lostPsw.required}`}
                    {errors.rPassword?.type === 'minLength' && `${texts.lostPsw.notPsw}`}
                    {errors.rPassword?.type === 'maxLength' && `${texts.lostPsw.notPsw}`}
                    {errors.rPassword?.type === 'validate' && `${texts.changePsw.invalidPsw}`}
                </span>

                <div className="btnD-container">      
                    <input 
                        className="btnD-acc access__confirm" 
                        type="submit" 
                        value={texts.lostPsw.confirm} />
                </div>
            </div>

        </form>
    );
}

export default LostPsw3Step;