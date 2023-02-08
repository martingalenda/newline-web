// ? REDUX: 
    import { useSelector } from 'react-redux';
// ? RUTAS:
    import { Link } from "react-router-dom";
// ?IMG:
    import playBeta from './media/playBeta.png';


// Boton fixed inferior izquierdo del viewport
const BetaBtn = () => {

        const {texts} = useSelector(state => state.languages)
        const {access} = useSelector(state => state.users)

        return(
            <>
                {
                    (!access || access === 0) &&
                        <Link to="/premium" className="betaBtn" data-wow-duration="1s">
                            <img className="betaBtn__img" src={playBeta} alt="Play Beta"/>
                            <span className="betaBtn__txt">{texts.betaBtn.txt}</span>
                        </Link>
                }
            </>
        );
}

export default BetaBtn;