import sliderImgs from '../sliderImgs';

const HeroSlide = ({race, setModal, id, stopWow, setStopWow}) => {

    const openModal = () => {
        setStopWow(true)
        setModal([id, race.ref, race.name])
    }

    return(
        <>
            <div className="hero__race">
                <img className={`race__img ${!stopWow && 'wow animate__fadeInUp'}`} src={sliderImgs[race.id]} data-wow-duration="1.5s" alt="Heroe"/>
                <button onClick={() => race.active && openModal()} className="race__btn">
                {race.name}
                </button>
            </div>
        </>
    )
} 
  
export default HeroSlide 