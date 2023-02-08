// ? REACT:
    import {useEffect, useState} from 'react';
// ? REDUX:
    import { useSelector } from 'react-redux';
// ? WOW ANIMATIONS:
    import WOW from 'wowjs';
// ? IMGS (Complemento)
    import arenaImgs from './arenaImgs.js';
// ? ICONS:
    import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
    import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
    import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
// ? COMPONENTS:
    import BetaBtn from '../../../../globals/buttons/betaBtn/BetaBtn';


const ArenaExtend = (props)=> {

    const {texts} = useSelector(state => state.languages)

    const [maps, setMaps] = useState(props.map);
    const [bg, setBg] = useState("Bg0");

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, [bg, maps]);

    // Botones para cambiar de mapa (Inferno/Castles)
    const infernoBtn = <button className="chInferno" onClick={() => setMaps("castles")}> <FontAwesomeIcon icon={faArrowLeft}/> Castles </button>;
    const castlesBtn = <button className="chCastles" onClick={() => setMaps("inferno")}> Inferno <FontAwesomeIcon icon={faArrowRight}/> </button>;
    const btnChangeMap = maps === "inferno" ?  infernoBtn : castlesBtn;

    return (

        <>
            <section className={`mapsExtend ${maps}${bg} wow animate__fadeIn`} data-wow-duration="0.5s"> 
                <div className="mapsExtend__bg--opacity"/>
        
                {btnChangeMap}
        
                <div className="mapsExtend__container">
        
                    <h2 className="container__title">{texts.maps.ext[maps].title}</h2>
                    <p className="container__text">{texts.maps.ext[maps].txt}</p>
        
                    <nav className="container__media">
                        <ul className="media__list">
                            { 
                            arenaImgs[maps].img.map((item, i) => 
                            <li key={i}> 
                                <img onClick={() => setBg(`Bg${i}`)} className={`list__imgs ${bg === `Bg${i}` ? 'activeBtn' : '' }`} src={item} alt={`${maps} Buttons`} />
                            </li>)
                            }
                        </ul>
                    </nav>
                        
                </div>
            </section>
            <BetaBtn />
        </>
    )
}

export default ArenaExtend;