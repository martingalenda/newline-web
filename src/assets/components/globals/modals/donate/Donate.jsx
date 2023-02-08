// ? REACT:
    import { useState, useEffect } from 'react';
    import { useRef } from "react";

// ? REDUX:
    import { useSelector } from 'react-redux';

// ? USE-FORM:
    import { useForm } from 'react-hook-form';

// ? RUTAS:
    import { Link } from "react-router-dom"; 

// ? PETICIÓN HTTP:
    import { helpHttp } from '../../../../helpers/helpHttp';

// ? COMPONENTS:
    import ButtonC from '../../buttons/classicBtn/ButtonC';


    
const Donate = ({close}) =>{

    // ? Estados globales textos y usuarios:
        const {texts} = useSelector(state => state.languages)
        const {coins} = useSelector(state => state.users)

    // ? Estados locales:
        const [price, setPrice] = useState(0); // Valor actual de la moneda escogida
        const [reward, setReward] = useState(0); // Recompenza total por la contribución
        const [title, setTitle] = useState(texts.modals.donate.donations); // Título del modal

    // ? Referencias:
        const donateForm = useRef()
        const terms = useRef()

    // ? Handler de Términos y condiciones:
        const showTerms = () => {
            donateForm.current.style.display = "none"
            terms.current.style.display = "block"
            setTitle(texts.register.terms)
        }
        const backTerms = () => {
            terms.current.style.display = "none"
            donateForm.current.style.display = "block"
            setTitle(texts.modals.donate.donations)
        }

    // ? Gestión del formulario con biblioteca React useForm:
        const {register, handleSubmit, watch, formState: {errors}} = useForm();

        // Referencia de inputs en tiempo real:
        const coin = watch('coin') // Moneda escogida para realizar la donación
        let mount = watch('mount') // Monto total a donar

        const onSubmit = (data) => { 
            console.log(data) 
            close()
        } 

    // ? Calculo de recompensas:
        // * Duda: Cuando la conexión se encuentra saturada, crashea la web, no encuentra la prop casa, como puedo evitar esto?
        // ! Falta validar correctamente el pattern de mount con las expresiones regulares, nose porque funciona mal
        
        useEffect(() =>{

            switch (coin) {
                case "ars": {
                    const argApi = "https://www.dolarsi.com/api/api.php?type=dolar"
                    const getPrices = async () => {
                        const argPrice = await helpHttp().get(argApi)
                        const response = parseFloat(argPrice[1].casa.venta)
                        setPrice(response)
                    }
                    getPrices()
                    setReward(parseInt(parseFloat(mount) * 100 / price))
                    break;
                }
                case "btc": {
                    const btcApi = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD"
                    const getPrices = async () => {
                        const btcPrice = await helpHttp().get(btcApi)
                        const response = btcPrice.USD
                        setPrice(response)
                    }
                    getPrices()
                    setReward(parseInt((parseFloat(mount) * price) * 100 / 1))
                    break;
                }
                default: {
                    setReward(parseInt(parseFloat(mount) * 100 / 1))
                    break;
                }
            }
        },[coin, mount, price])


    return( 
        <section className={`modal__container donations`}>
            <button className="modal__x" onClick={close}>X</button>

            <div className="container__items">

                <h3>{title}</h3>

                <form className="donation__form" ref={donateForm} onSubmit={handleSubmit(onSubmit)}>

                    <div className="items__form">
                        <label>{texts.modals.donate.contributions}</label>
                        <input className="form__mount" 
                            type="text"
                            defaultValue={0}
                            {...register (
                                "mount",
                                { required: true,
                                maxLength: 9,
                                pattern: /([0-9]{1,4})([.]?[0-9]{0,2})/
                                }
                            )} />
                    </div>

                    <div className="items__form">
                        <label>{texts.modals.donate.media}</label>
                        <select className="form__coins" 
                            defaultValue="usd"
                            {...register (
                                "coin"
                            )}>
                            <option value="usd">USD</option>
                            <option value="usdt">USDT</option>
                            <option value="btc">BTC</option>
                            <option value="ars">ARG</option>
                        </select>
                    </div>

                    <div className="items__form">
                        <span>{texts.modals.donate.reward}</span>
                        <span className="rewards">{reward} NLCoins</span>
                    </div>

                    <div className="items__form">
                        <span>{texts.modals.donate.posession}</span>
                        <span className="posession">{coins} NLCoins</span>
                    </div>

                    <span className="errorMsg">
                        {errors.mount?.type === 'required' && `${texts.modals.donate.required}`}
                        {errors.mount?.type === 'maxLength' && `${texts.modals.donate.max}`}
                        {errors.mount?.type === 'pattern' && `${texts.modals.donate.invalid}`}
                    </span>

                    <div className="access__terms">
                        <div className="checkBox">
                            <input 
                                id="checkTerms"
                                type="checkbox"
                                className="checkOK"
                                required
                                {...register (
                                    "checkTerms"
                                )}
                            /> 
                            <label htmlFor="checkTerms" className="label terms__btn"/>
                        </div>
                        <span>{texts.register.accept}</span>
                        <Link onClick={showTerms} to="#">
                            <span className="access__redirect">{texts.register.terms}</span>
                        </Link>

                    </div>

                    <div className="btnD-container">
                        <input 
                            className="btnD-Donate access__confirm" 
                            type="submit" 
                            value={texts.modals.donate.donate} />  
                    </div> 

                </form>

                <div ref={terms} className="terms_conditions">
                    <p className="terms_coinditions--text" dangerouslySetInnerHTML={{__html: texts.modals.donate.terms}}></p>
                    <ButtonC myOnClick={() => backTerms()} btnClass="backTerms" text="OK"/>
                </div>


            </div>
        </section>
    );
}

export default Donate;