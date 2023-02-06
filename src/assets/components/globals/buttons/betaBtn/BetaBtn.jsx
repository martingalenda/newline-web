import {useContext} from 'react';
import LangContext from '../../../../context/LangContext';
import UserContext from '../../../../context/UserContext';
import { Link } from "react-router-dom";
import playBeta from './media/playBeta.png';

// Boton fixed inferior izquierdo del viewport
const BetaBtn = () => {

        const { texts } = useContext(LangContext);
        let { user } = useContext(UserContext);

        return(
            <>
                {
                    (!user.access || user.access === 0) &&
                        <Link to="/premium" className="betaBtn" data-wow-duration="1s">
                            <img className="betaBtn__img" src={playBeta} alt="Play Beta"/>
                            <span className="betaBtn__txt">{texts.betaBtn.txt}</span>
                        </Link>
                }
            </>
        );
}

export default BetaBtn;