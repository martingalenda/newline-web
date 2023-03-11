import sliderImgs from '../sliderImgs';

const HeroSlide = ({race, setModal, id}) => {

    return(
        <>
            <div className="hero__race">
                <img className="race__img wow animate__fadeInUp" src={sliderImgs[race.id]} data-wow-duration="1.5s" alt="Heroe"/>
                <button onClick={() => race.active && setModal([id, race.ref, race.name])} className="race__btn">
                {race.name}
                </button>
            </div>
        </>
    )
}

export default HeroSlide 