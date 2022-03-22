import React, {useState} from 'react';
import WOW from 'wowjs'; 
import mapsExt from './mapsExt.json'

/* const mapsImgs = require.context('./media/', true); */ // webpack https://webpack.js.org/guides/dependency-management/#requirecontext

const MapsExtend = (props)=> {

    /* let [map, setMap] = useState(props.map); */
    let [bg, setBg] = useState(props.map);

    // Botones para cambiar de sección
    const infernoBtn = <button className="chInferno" onClick={() => setBg("Castles")}>Castles</button>;
    const castlesBtn = <button className="chCastles" onClick={() => setBg("Inferno")}>Inferno</button>;

    const newWOW = () => {new WOW.WOW().init();}
    newWOW()

    return (
        
        <section className={`mapsExtend ${bg}Bg wow animate__fadeIn`} data-wow-duration="1.5s">
            <div className="mapsExtend__container">

                <h2 className="container__title">Title</h2>
                <p className="container__text">{mapsExt.mapsExt.inferno.text}</p>
                
                { props.map === "Inferno" ?  infernoBtn : castlesBtn }

                <nav className="container__media">
                    <ul className="media__list">

                        {/* <img src={mapsImgs(`./${props.map}1.png`).default} alt="Maps" />  */}
                        {
                            /* mapsExtend.mapsExt.maps.inferno.img.map((item, i) => <li key={i}><img className="list__imgs" src={item}  alt="infernoImgs" /></li>) */ /* {Recorro el array devolviendo los items en <p> }*/
                        }

                    </ul>
                </nav>
            </div>
        </section>

    )
}

export default MapsExtend;