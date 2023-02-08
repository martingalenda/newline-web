// ? REDUX:
    import { useSelector } from 'react-redux';
// ? RUTAS:
    import { Link } from "react-router-dom"; 
// ? USE-FORM:
    import { useForm } from 'react-hook-form';
 

const Reg1Step = ({regStep, setRegStep, openN1}) => {


    const {texts} = useSelector(state => state.languages)

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => { 
        //console.log(data) 
        setRegStep(regStep = 2)
        openN1()
    }  

    return(
        <>

            <form className="register__form" onSubmit={handleSubmit(onSubmit)}>

                <div className="form__firstStep">
                    <input 
                        className="access__input" 
                        type="email"
                        placeholder={texts.register.email} 
                        autoFocus
                        {...register (
                            "email",
                            { required: true,
                            minLength: 6,
                            maxLength: 40,
                            pattern: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/}
                        )} />

                    <span className="errorMsg">
                        {errors.email?.type === 'required' && `${texts.register.required}`}
                        {errors.email?.type === 'minLength' && `${texts.register.notEmail}`}
                        {errors.email?.type === 'maxLength' && `${texts.register.notEmail}`}
                        {errors.email?.type === 'pattern' && `${texts.register.notEmail}`}
                    </span>

                    <input 
                        className="access__input" 
                        type="text" 
                        autoComplete="off" 
                        placeholder={texts.register.user} 
                        {...register (
                            "userName",
                            { required: true,
                            minLength: 5,
                            maxLength: 20,
                            pattern: /^[A-Za-z0-9]+$/i}
                        )} />

                    <span className="errorMsg">
                        {errors.userName?.type === 'required' && `${texts.register.required}`}
                        {errors.userName?.type === 'minLength' && `${texts.register.min} 5 ${texts.register.chars}`}
                        {errors.userName?.type === 'maxLength' && `${texts.register.max} 20 ${texts.register.chars}`}
                        {errors.userName?.type === 'pattern' && `${texts.register.notSymb}`} 
                    </span>

                    <input 
                        className="access__input" 
                        type="text" 
                        autoComplete="off" 
                        placeholder={texts.register.char} 
                        {...register (
                            "charName",
                            { required: true,
                            minLength: 4,
                            maxLength: 16,
                            pattern: /^[A-Za-z0-9]+$/i}
                        )} />
                    <span className="errorMsg">
                        {errors.charName?.type === 'required' && `${texts.register.required}`}
                        {errors.charName?.type === 'minLength' && `${texts.register.min} 4 ${texts.register.chars}`}
                        {errors.charName?.type === 'maxLength' && `${texts.register.max} 16 ${texts.register.chars}`}
                        {errors.charName?.type === 'pattern' && `${texts.register.notSymb}`} 
                    </span>

                    <div className="btnD-container">
                        <input 
                            className="btnD-acc access__confirm" 
                            type="submit" 
                            value={texts.register.next}
                            />
                    </div>

                    <span className="form__login">{texts.register.haveAcc}
                        <Link to="/login">
                            <span className="access__redirect">{texts.register.login}</span>
                        </Link>
                    </span>
                </div>

            </form>


        </>
    );

}

export default Reg1Step;