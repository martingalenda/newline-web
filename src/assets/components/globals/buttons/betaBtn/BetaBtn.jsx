import React from 'react';
import { Link } from "react-router-dom";
import playBeta from './media/playBeta.png';
import betaBtn from './betaBtn.json';

const BetaBtn = () => {
        return(
            <Link to="/playbeta" className="playBeta" data-wow-duration="1s">
                <img className="playBeta__img" src={playBeta} alt="Play Beta"/>
                <span className="playBeta__txt">{betaBtn.betaBtn.txt}</span>
            </Link>
        );
}

export default BetaBtn;