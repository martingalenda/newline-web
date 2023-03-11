// ? REDUX:
    import { useSelector, useDispatch } from 'react-redux';
    import {logIn} from '../../../../redux/reducers/users'
// ? RUTAS:
    import { Link } from "react-router-dom";
    import { useNavigate } from "react-router-dom";
// ? USE-FORM:
    import { useForm } from 'react-hook-form';
// ? PETICIÓN HTTP:
    import { helpHttp } from '../../../../helpers/helpHttp';

const LogIn = () => {

    const {texts} = useSelector(state => state.languages) 
    const dispatch = useDispatch()

    const {register, handleSubmit, formState: {errors}} = useForm();

    const navigate = useNavigate()

    // Inicio de sesión FAKE (sin backend, sin validación)
    const onSubmit = (data) => { 
        // console.log(data)
        const localFakeApi = "http://localhost:3000/users"
        const checkUser = async () => {
            const usersData = await helpHttp().get(localFakeApi)
            const isValidUser = await usersData.find(user => data.user === user.userName )
            if (isValidUser) {
                if (isValidUser.pw === data.psw) {
                    dispatch(logIn({
                        rememberMe: data.rememberMe,
                        userName: isValidUser.userName,
                        nick: isValidUser.nick,
                        avatar: isValidUser.avatar,
                        access: isValidUser.access,
                        coins: isValidUser.coins,
                        accLvl: isValidUser.accLvl,
                        userRank: isValidUser.userRank,
                        clan: isValidUser.clan,
                        clanRank: isValidUser.clanRank,
                        alliance: isValidUser.alliance,
                        allianceRank: isValidUser.allianceRank
                    }))
                    navigate('/home')
                }
            } else {
                console.log("Datos incorrectos")
            }
        }
        checkUser()
    }

    return(
        <section className="logIn access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{texts.logIn.title}</h2>

                <form className="logIn__form" onSubmit={handleSubmit(onSubmit)}>

                    <input 
                        className="access__input" 
                        type="text" 
                        autoComplete="off" 
                        placeholder={texts.logIn.user} 
                        autoFocus
                        {...register (
                            "user",
                            { required: true,
                            minLength: 5,
                            maxLength: 20,
                            pattern: /^[A-Za-z0-9]+$/i}
                        )} />
                    <span className="errorMsg">
                        {errors.user?.type === 'required' && `${texts.logIn.required}`}
                        {errors.user?.type === 'minLength' && `${texts.logIn.notUser}`}
                        {errors.user?.type === 'maxLength' && `${texts.logIn.notUser}`}
                        {errors.user?.type === 'pattern' && `${texts.logIn.notSymb}`}
                    </span>

                    <input 
                        className="access__input" 
                        type="password" 
                        autoComplete="off" 
                        placeholder={texts.logIn.psw} 
                        {...register (
                            "psw",
                            { required: true,
                            minLength: 5,
                            maxLength: 25}
                        )} />
                    <span className="errorMsg">
                        {errors.psw?.type === 'required' && `${texts.logIn.required}`}
                        {errors.psw?.type === 'minLength' && `${texts.logIn.notPsw}`}
                        {errors.psw?.type === 'maxLength' && `${texts.logIn.notPsw}`}
                    </span>
                    <Link to="/lostpsw">         
                        <span className="form__lostPsw access__redirect">{texts.logIn.lostPsw}</span>
                    </Link>

                    <div className="btnD-container">
                        <input 
                            className="btnD-acc access__confirm" 
                            type="submit" 
                            value={texts.logIn.logInBtn} />
                    </div>
                    <div className="access__remember">
                        <div className="checkBox">
                            <input id="rememberMe" 
                            className="disNone checkOK" 
                            type="checkbox"
                            {...register (
                                "rememberMe"
                            )}
                            /> 
                            <label htmlFor="rememberMe" className="label terms__btn"></label>
                        </div>
                        <span>{texts.logIn.remember}</span>
                    </div>

                </form>
            </div>
        </section>
    );
}

export default LogIn;