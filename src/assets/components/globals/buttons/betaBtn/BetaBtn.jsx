import {useContext} from 'react';
import LangContext from '../../../../context/LangContext';
import { Link } from "react-router-dom";
import playBeta from './media/playBeta.png';

// Boton fixed inferior izquierdo del viewport
const BetaBtn = () => {

        const { texts } = useContext(LangContext);

        return(
            <Link to="/playbeta" className="betaBtn" data-wow-duration="1s">
                <img className="betaBtn__img" src={playBeta} alt="Play Beta"/>
                <span className="betaBtn__txt">{texts.betaBtn.txt}</span>
            </Link>
        );
}

export default BetaBtn;