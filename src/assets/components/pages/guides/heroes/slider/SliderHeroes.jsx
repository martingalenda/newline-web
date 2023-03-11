// ? REACT
  import {useState} from 'react';
// ? MODALS:
  import Modal from '../../../../globals/modals/Modal'
  import MHeroes from '../modalHeroes/MHeroes'
  import {useModals} from '../../../../../hooks/useModals'
// ? REDUX:
  import { useSelector } from 'react-redux';
// ? SLIDER:
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
// ? COMPONENT:
  import HeroSlide from './heroSlide/HeroSlide'

const SliderHeroes = () => {

    const {texts} = useSelector(state => state.languages)

    // Slider conf
    const settings = {
        dot: true,
        fade: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
    } 

     let [race, setRace] = useState([])
     const [isActiveHeroes, openHeroes, closeHeroes] = useModals()

     const setModal = (raceData) => {
       setRace(raceData)
       openHeroes()
     }
 
 
    return(
      <>
        <div className="heroes__slider" >
            <Slider {...settings}> 
              {
                texts.heroes.races.map((raceData, i) => 
                  <HeroSlide
                    key={raceData.id}
                    race={raceData}
                    id={raceData.id}
                    setModal={setModal}
                  />
                )
              }
            </Slider>
        </div>

        <Modal active={isActiveHeroes} close={closeHeroes}>
            <MHeroes
                race={race}
                setRace={setRace}
            />
        </Modal> 
      </>
    );
}

export default SliderHeroes;