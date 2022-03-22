import React, { useState } from 'react';
import WOW from 'wowjs'; 
import mapsMain from './maps.json';
import infernoBtn from './media/infernoBtn.png';
import castlesBtn from './media/castlesBtn.png';
import MapsExtend from '../mapsExtend/MapsExtend.jsx';

const Maps = () => {

    let [maps, setMaps] = useState("Maps");

    const newWOW = () => {new WOW.WOW().init();}
    newWOW()

    if(maps === "Maps") 
        return (
            <section className="maps">
                <div className="maps__container">
                    <h2 className="container__title wow animate__fadeInUp" data-wow-offset="180" data-wow-duration="1s">{mapsMain.maps.title}</h2>
                    <div className="container__main">
                        <div className="main__inferno wow animate__fadeInLeft" data-wow-offset="180" data-wow-duration="1s"
                        onClick={() => setMaps("Inferno")}>
                            <img className="inferno__btn" src={infernoBtn} alt="inferno"/> <span>Inferno</span>
                        </div>
                        <div className="main__leyend wow animate__fadeInUp" data-wow-offset="160" data-wow-duration="1s">
                            <span className="leyend__title">{mapsMain.maps.leyendTitle}</span>
                            <small className="leyend__text">{mapsMain.maps.leyendTxt}<br/>{mapsMain.maps.leyendTxt2}</small>
                        </div>
                        <div className="main__castles wow animate__fadeInRight" data-wow-offset="180" data-wow-duration="1s" onClick={() => setMaps("Castles")}>
                            <img className="castles__btn" src={castlesBtn} alt="castles"/>
                            <span>Castles</span>
                        </div>
                    </div>
                </div>
            </section>
        );

    if(maps === "Inferno" || maps === "Castles") 
        return (
            <MapsExtend map={maps}/>
        );
    else
        return (
            <React.Fragment>
                Error 404
            </React.Fragment>
        )
}

export default Maps;