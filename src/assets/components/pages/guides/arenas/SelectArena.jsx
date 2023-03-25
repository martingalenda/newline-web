// ? REDUX:
    import {useSelector} from 'react-redux';
// ? COMPONENTS:
    import ArenaBtn from "./ArenaBtn.jsx";
// ? IMG:
    import infernoBtn from './media/infernoBtn.png';
    import castlesBtn from './media/castlesBtn.png';

const SelectArena = ({setArenas}) => {

    const {texts} = useSelector(state => state.languages)

    return(
        <section className="maps">
            <div className="maps__container">
                <h2 className="container__title wow animate__fadeInUp" data-wow-offset="180" data-wow-duration="1s"> {texts.maps.title} </h2>
                <div className="container__main">
                    <ArenaBtn name="Inferno" img={infernoBtn} setArena={setArenas} animate="animate__fadeInLeft"/>
                    <div className="main__leyend wow animate__fadeInUp" data-wow-offset="160" data-wow-duration="1s">
                        <span className="leyend__title"> {texts.maps.leyendTitle} </span>
                        <small className="leyend__text"> {texts.maps.leyendTxt} <br/> {texts.maps.leyendTxt2} </small>
                    </div>
                    <ArenaBtn name="Castles" img={castlesBtn} setArena={setArenas} animate="animate__fadeInRight"/>
                </div>
            </div>
        </section>
    )
}
export default SelectArena