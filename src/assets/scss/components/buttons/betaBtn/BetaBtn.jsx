import React, { Component } from 'react';
import { Link } from "react-router-dom";
import playBeta from './media/playBeta.png';

class BetaBtn extends Component{

    render() {
        return(
            <Link to="/playbeta" className="playBeta" data-wow-duration="1s">
                <img className="playBeta__img" src={playBeta} alt="Play Beta"/>
                <span className="playBeta__txt">Acceso al beta</span>
            </Link>
        );
    }
}

export default BetaBtn;