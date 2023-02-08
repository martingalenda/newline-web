// ? REACT:
    import { useEffect, useState } from 'react';
// ? REDUX:
    import { useSelector } from 'react-redux';
// ? WOW ANIMATION:
    import WOW from 'wowjs';
// ? COMPONENTS:
    import ArenaExtend from './arenaExtend/ArenaExtend.jsx'; // Extended arena
// ? IMG:
    import infernoBtn from './media/infernoBtn.png';
    import castlesBtn from './media/castlesBtn.png';


const Arenas = () => {

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);

    let [map, setMap] = useState("maps");

    const {texts} = useSelector(state => state.languages)

    if(map === "maps") 
        return (
            <section className="maps">
                <div className="maps__container">
                    <h2 className="container__title wow animate__fadeInUp" data-wow-offset="180" data-wow-duration="1s">{texts.maps.title}</h2>
                    <div className="container__main">
                        <div className="main__inferno wow animate__fadeInLeft" data-wow-offset="180" data-wow-duration="1s"
                        onClick={() => setMap("inferno")}>
                            <img className="inferno__btn" src={infernoBtn} alt="inferno"/> <span>Inferno</span>
                        </div>
                        <div className="main__leyend wow animate__fadeInUp" data-wow-offset="160" data-wow-duration="1s">
                            <span className="leyend__title">{texts.maps.leyendTitle}</span>
                            <small className="leyend__text">{texts.maps.leyendTxt}<br/>{texts.maps.leyendTxt2}</small>
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