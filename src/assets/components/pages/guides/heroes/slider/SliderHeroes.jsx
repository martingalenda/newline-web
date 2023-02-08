// ? REACT
  import { useState, /* useEffect */} from 'react';
// ? REDUX:
  import { useSelector } from 'react-redux';
// ? SLIDER:
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import sliderImgs from './sliderImgs';
  
// ? MODALS:
  import Modal from '../../../../globals/modals/Modal'
  import MHeroes from '../modalHeroes/MHeroes'
  import {useModals} from '../../../../../hooks/useModals'


const SliderHeroes = () => {

  const {texts} = useSelector(state => state.languages)

    let [race, setRace] = useState(0)
    const [isActiveHeroes, /* openHeroes, */ closeHeroes] = useModals();

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

/*     useEffect(() => {
        console.log(race)
        openHeroes() 
    },[race]) */

    return(
      <>
        <div className="heroes__slider" >
            <Slider {...settings}> 
              {
                texts.heroes.races.map((heroeI, i) => 
                  <div key={heroeI.id}>
                    <img className="race__img wow animate__fadeInUp" src={sliderImgs[i]} data-wow-duration="1.5s" alt="Heroe"/>
                    <button onClick={() => setRace(race = i[0])} className="race__btn">
                      {heroeI.race}
                    </button>
                  </div>
                )
              }
            </Slider>
        </div>

        <Modal active={isActiveHeroes} close={closeHeroes}>
          <MHeroes
            race={race}
          />
        </Modal>
      </>
    );
}

export default SliderHeroes;