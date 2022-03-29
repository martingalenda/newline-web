import React from 'react';
import { Link } from "react-router-dom";
import playBeta from './media/playBeta.png';
import betaFixedBtn from './betaBtn.json';

// Boton fixed inferior izquierdo del viewport
const BetaBtn = () => {
        return(
            <Link to="/playbeta" className="betaBtn" data-wow-duration="1s">
                <img className="betaBtn__img" src={playBeta} alt="Play Beta"/>
                <span className="betaBtn__txt">{betaFixedBtn.betaBtn.txt}</span>
            </Link>
        );
}

export default BetaBtn;