// ? REACT:
    import {useState} from 'react';
// ? REDUX:
    import {useSelector} from 'react-redux';
// ? WOW ANIMATIONS:
    import useWow from '../../../../../hooks/useWow.jsx';
// ? IMGS (Complemento)
    import arenaImgs from './arenaImgs.js';
// ? ICONS:
    import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
    import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
    import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
// ? COMPONENTS:
    import PremiumBtn from '../../../../globals/buttons/premiumBtn/PremiumBtn';


const ArenaExtend = ({arena, setArena})=> {

    const {texts} = useSelector(state => state.languages)

    const [bg, setBg] = useState("Bg0");

    useWow(arena)
 
    // Botones para cambiar de mapa (Inferno/Castles)
    // ! Optimizar
    const infernoBtn = <button className="chInferno" onClick={() => setArena("castles")}> <FontAwesomeIcon icon={faArrowLeft}/> Castles </button>;
    const castlesBtn = <button className="chCastles" onClick={() => setArena("inferno")}> Inferno <FontAwesomeIcon icon={faArrowRight}/> </button>;
    const btnChangeMap = arena === "inferno" ?  infernoBtn : castlesBtn;

    return (

        <>
            <section className={`mapsExtend ${arena}${bg} wow animate__fadeIn`} data-wow-duration="1.5s"> 
                <div className="mapsExtend__bg--opacity"/>
        
                {btnChangeMap}
        
                <div className="mapsExtend__container">
        
                    <h2 className="container__title">{texts.maps.ext[arena].title}</h2>
                    <p className="container__text">{texts.maps.ext[arena].txt}</p>
        
                    <nav className="container__media">
                        <ul className="media__list">
                            { 
                            arenaImgs[arena].img.map((item, i) => 
                            <li key={i}> 
                                <img onClick={() => setBg(`Bg${i}`)} className={`list__imgs ${bg === `Bg${i}` ? 'activeBtn' : '' }`} src={item} alt={`${arena} button`} />
                            </li>)
                            }
                        </ul>
                    </nav>
                        
                </div>
            </section>
            <PremiumBtn />
        </>
    )
}

export default ArenaExtend;