import React from 'react';
/* import mapsExtend from './mapsExtend.js'; */
import WOW from 'wowjs';

const MapsExtend = (props)=> {
    
    const newWOW = () => {new WOW.WOW().init();}
    newWOW()
    console.log(props.map)

    if (props.map === "Inferno")
        return (
            
            <section className="mapsExtend wow animate__fadeIn" data-wow-duration="1.5s">
                <div className="mapsExtend__container">
                    <h2 className="container__title">{/* mapsExtend.maps.inferno.title */}</h2>
                    <p className="container__text">{/* mapsExtend.maps.inferno.text */}</p>
                    <nav className="container__media">
                        <ul className="media__list absolute">
                            {
                                /* mapsExtend.mapsExt.maps.inferno.img.map((item, i) => <li key={i}><img className="list__imgs" src={item} alt="infernoImgs" /></li>) */ /* {Recorro el array devolviendo los items en <p> }*/
                            }
                        </ul>
                    </nav>
                </div>
            </section>
        )
    if (props.map === "Castles")
        return (
            <section className="mapsExtend wow animate__fadeIn" data-wow-duration="1.5s">
                <div className="mapsExtend__container">
                    <h2 className="container__title">{/* mapsExtend.mapsExt.maps.castles.title */}</h2>
                    <p className="container__text">{/* mapsExtend.mapsExt.maps.castles.text */}</p>
                    <nav className="container__media">
                        <ul className="media__list absolute">
                            {
                                /* mapsExtend.mapsExt.maps.castles.img.map((item, i) => <li key={i}><img className="list__imgs" src={item} alt="infernoImgs" /></li>) */ /* {Recorro el array devolviendo los items en <p> }*/
                            }
                        </ul>
                    </nav>
                </div>
            </section>
        )
    else
        return (
            <React.Fragment>
                Error 404
            </React.Fragment>
        )
}

export default MapsExtend;