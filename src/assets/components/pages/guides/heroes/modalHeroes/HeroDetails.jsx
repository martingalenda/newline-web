// ? REDUX:
    import {useSelector} from 'react-redux';

const HeroDetails = ({race, hero}) => {

  const {texts} = useSelector(state => state.languages)

  return (
    <>
        <div className="hero__details">
            <div className="details__left">
              <p><span>{texts.heroes.race}:</span> {race[2]}</p>
              <p><span>{texts.heroes.weapon}:</span> {hero.weapon}</p>
              <p><span>{texts.heroes.difficulty}:</span> {hero.difficulty}</p>
            </div>

            <div className="details__right">
              <p><span>{texts.heroes.mainRole}:</span> {hero.rol}</p>
              <p><span>{texts.heroes.armor}:</span> {hero.armor}</p>   
            </div>
        </div> 

        <div className="hero__about">
          <h3>{texts.heroes.about}</h3>
          <p dangerouslySetInnerHTML={{__html: hero.about}}/>
        </div>
    </>
  )
}

export default HeroDetails