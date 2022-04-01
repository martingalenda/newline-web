import React, {useState} from 'react';
import WOW from 'wowjs';
import mapExt from './mapsExt.js'; // Complement
// Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const ArenaExtend = (props)=> {

    const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()

    const [maps, setMaps] = useState(props.map);
    const [bg, setBg] = useState("Bg0");

    // Botones para cambiar de mapa (Inferno/Castles)
    const infernoBtn = <button className="chInferno" onClick={() => setMaps("castles")}> <FontAwesomeIcon icon={faArrowLeft}/> Castles </button>;
    const castlesBtn = <button className="chCastles" onClick={() => setMaps("inferno")}> Inferno <FontAwesomeIcon icon={faArrowRight}/> </button>;
    const btnChangeMap = maps === "inferno" ?  infernoBtn : castlesBtn;

    return (

        <React.Fragment>
        <section className={`mapsExtend ${maps}${bg} wow animate__fadeIn`} data-wow-duration="0.5s"> 
            <div className="mapsExtend__bg--opacity"/>

            {btnChangeMap}

            <div className="mapsExtend__container">

                <h2 className="container__title">{mapExt[maps].title}</h2>
                <p className="container__text">{mapExt[maps].txt}</p>

                <nav className="container__media">
                    <ul className="media__list">
                        { 
                        mapExt[maps].img.map((item, i) => 
                        <li key={i}> 
                            <img onClick={() => setBg(`Bg${i}`)} className={`list__imgs ${bg === `Bg${i}` ? 'activeBtn' : '' }`} src={item} alt={`${maps} Buttons`} />
                        </li>)
                        }
                    </ul>
                </nav>

            </div>

        </section>
        </React.Fragment>
    )
}

export default ArenaExtend;