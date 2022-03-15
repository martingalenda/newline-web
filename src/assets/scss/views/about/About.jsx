import React, { Component } from 'react';
import Maps from '../../components/maps/Maps';
import PlayBtn from '../../components/buttons/playBtn/PlayBtn';
import bg_intro_br from './media/bg_intro_br.png';
import bg_intro_bl from './media/bg_intro_bl.png';
import WOW from 'wowjs';

class About extends Component{

    componentDidMount() {new WOW.WOW().init();}

    render() {
        return(
            <React.Fragment>
            <section className="aboutNL wow animate__fadeIn" data-wow-duration="0.5s">
                <div className="aboutNL__intro wow animate__fadeInDown" data-wow-duration="1.5s">
                    <h2 className="intro__title">La historia y las reglas han cambiado <span className="title__deg">Bienvenido a Newline</span></h2>
                    <p className="intro__parraph">Somos un servidor de L2 orientado a la jugabilidad tipo M.O.B.A. Únicos en nuestro género.
                    Desarrollado por/para fanáticos exigentes. Venimos a proponer un juego mucho más dinámico y competitivo que nunca, enfocados por completo en los combates grupales (PvP, CvC, AvA).
                    Consideramos haber eliminado de raíz los problemas natos de nuestro amado juego, logrando un sistema más balanceado y transparente, en el cual se premia de forma justa, repercutiendo
                    positivamente en la estabilidad del ciclo de vida.
                    </p>
                    <PlayBtn/>
                </div>
                <div className="aboutNL__changes wow animate__fadeInUp" data-wow-offset="140" data-wow-duration="1.5s">
                    <h2 className="changes__title">La historia y las reglas han cambiado</h2>
                    <p className="changes__parraph">Somos un servidor de L2 único, competitivo, estilo MOBA, quien combina y explota
                    todas las mecanicas y habilidades propias de cada jugador, con la sinergia que este tenga con sus compañeros de equipo.
                    En nuestro clásico modo de juego, dos equipo de nueve integrantes se enfrentaran cara a cara con sus Héroes en una battalla
                    épica dentro de la nueva Arena Inferno. El objetivo principal de los participantes será lograr implementar tras cada partida
                    la estrategia que crean más adecuada, para intentar derribar la base enemiga antes que el equipo contrario.</p>
                </div>
                <img className="changes__bgFight changes__bgFight--left wow animate__fadeInBottomLeft" data-wow-offset="120" data-wow-duration="1.5s" src={bg_intro_bl} alt="Fight!" />
                <img className="changes__bgFight changes__bgFight--right wow animate__fadeInBottomRight" data-wow-offset="120" data-wow-duration="1.5s" src={bg_intro_br} alt="Fight!" />
            </section>
            <Maps/>
            </React.Fragment>
        );
    }
}

export default About;