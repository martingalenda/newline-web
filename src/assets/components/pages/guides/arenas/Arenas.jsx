import { useState } from 'react';
import data from '../../../data/data.js'; // Complement
import ArenaExtend from './arenaExtend/ArenaExtend.jsx'; // Ext component
import infernoBtn from './media/infernoBtn.png';
import castlesBtn from './media/castlesBtn.png';

const Arenas = () => {

    let [map, setMap] = useState("maps");

    const mapMain = data.maps

    if(map === "maps") 
        return (
            <section className="maps">
                <div className="maps__container">
                    <h2 className="container__title wow animate__fadeInUp" data-wow-offset="180" data-wow-duration="1s">{mapMain.title}</h2>
                    <div className="container__main">
                        <div className="main__inferno wow animate__fadeInLeft" data-wow-offset="180" data-wow-duration="1s"
                        onClick={() => setMap("inferno")}>
                            <img className="inferno__btn" src={infernoBtn} alt="inferno"/> <span>Inferno</span>
                        </div>
                        <div className="main__leyend wow animate__fadeInUp" data-wow-offset="160" data-wow-duration="1s">
                            <span className="leyend__title">{mapMain.leyendTitle}</span>
                            <small className="leyend__text">{mapMain.leyendTxt}<br/>{mapMain.leyendTxt2}</small>
                        </div>
                        <div className="main__castles wow animate__fadeInRight" data-wow-offset="180" data-wow-duration="1s" onClick={() => setMap("castles")}>
                            <img className="castles__btn" src={castlesBtn} alt="castles"/>
                            <span>Castles</span>
                        </div>
                    </div>
                </div>
            </section>
        );

    else 
        return (
            <ArenaExtend map={map}/>
        );
}

export default Arenas;