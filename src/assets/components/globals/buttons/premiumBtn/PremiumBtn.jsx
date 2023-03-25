// ? REDUX: 
    import { useSelector } from 'react-redux';
// ? RUTAS:
    import { Link } from "react-router-dom";
// ? IMG:
    import playBeta from './media/playBeta.png';

// Botón fixed, ubicado en la parte inferior izquierdo del viewport.
// Aparece o no en distintas secciones, dependiendo del nivel de acceso del usuario.

const PremiumBtn = () => {

        const {texts} = useSelector(state => state.languages)
        const {access} = useSelector(state => state.users)

        return(
            <>
                {
                    (!access || access === 0) &&
                        <Link to="/premium" className="premiumBtn">
                            <img className="premiumBtn__img" src={playBeta} alt={texts.premiumBtn.txt} />
                            <span className="premiumBtn__txt">
                                {texts.premiumBtn.txt}
                            </span>
                        </Link>
                }
            </>
        );
}

export default PremiumBtn;