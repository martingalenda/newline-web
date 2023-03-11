
// ? REACT:
  import { useState, useEffect} from 'react'
// ? REDUX:
  import { useSelector } from 'react-redux';
// ? FA-icons:
  import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
  import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
  import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';


const MHeroes = ({race, setRace}) => {

  const {texts} = useSelector(state => state.languages)
  const data = texts.heroes.races

  // ? Estado inicial
    const initialRef = data[race[0]][race[1]][0].ref // Nombre de la primera clase de la raza
    const initialHero = data[race[0]][race[1]][0][initialRef] // Objeto de la clase seleccionada

  let [classId, setClassId] = useState(0)
  const [classRef, setClassRef] = useState(initialRef)
  const [hero, setHero] = useState(initialHero)

 console.log(data[(data.length - 1)][data[(data.length - 1)].ref])

  // ? Raza anterior y siguiente:
    const prevRace = () => {
      race[0] === 0 ?
        setRace([ (data.length - 1), data[(data.length - 1)].ref, data[(data.length - 1)][data[(data.length - 1)].ref] ])
      :
        setRace([ (race[0] - 1), data[(race[0] - 1)].ref, data[(race[0] - 1)][data[(race[0] - 1)].ref] ])
    }
    const nextRace = () => {
      race[0] === (data.length - 1) ?
        setRace([0, "humans", "Humans"])
      :
        setRace([(race[0] + 1), ""])
    }

  // ? Heroe anterior y siguiente:
    const prevHero = () => {
      classId === 0 ?
        setClassId(classId = (data[race[0]][race[1]].length -1))
      :
        setClassId(classId - 1)
    }
    const nextHero = () => {
      classId === (data[race[0]][race[1]].length -1) ?
        setClassId(classId = 0)
      :
        setClassId(classId + 1)
    }

    useEffect(()=> {
      setClassRef(data[race[0]][race[1]][classId].ref)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[classId, race])

    useEffect(() => {
      setHero(data[race[0]][race[1]][classId][classRef])
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[classRef]) 

  return (
    <div className="races__container">
      <div className="container__hero">

        <div className="hero__select">
          <div className="select__class">
            <FontAwesomeIcon onClick={() => prevHero()} icon={faAngleLeft} className="change__btn"/>
            <h2>{hero.name}</h2> 
            <FontAwesomeIcon onClick={() => nextHero()} icon={faAngleRight} className="change__btn"/>
          </div>
          <div className="select__race">
            <span>{texts.heroes.race}:</span>
            <FontAwesomeIcon onClick={() => prevRace()} icon={faAngleLeft} className="change__btn"/>
            <h3>{race[2]}</h3> 
            <FontAwesomeIcon onClick={() => nextRace()} icon={faAngleRight} className="change__btn"/>
          </div>
        </div>

        <div className="hero__details">
          <div className="details__left">
            <p><span>{texts.heroes.mainRole}:</span> {hero.rol}</p>
            <p><span>{texts.heroes.weapon}:</span> {hero.weapon}</p>
          </div>
          <div className="details__right">
            <p><span>{texts.heroes.difficulty}:</span> {hero.difficulty}</p>
            <p><span>{texts.heroes.armor}:</span> {hero.armor}</p>   
          </div>
        </div>

        <div className="hero__about">
          <h3>{texts.heroes.about}</h3>
          <p dangerouslySetInnerHTML={{__html: hero.about}}/>
        </div>

        <div className="hero__skills">
          <h3>{texts.heroes.skills}</h3>
          <div className="skills__pasive">
            <img src={`../img/heroesSkills/${classRef}/p.jpg`} alt="icon pasive"/>
            <p>{hero.skills[0].description}</p>
          </div>
          <div className="skills__active">
            {
              hero.skills.map((skill, i) =>
                !skill.f0 &&
                  <img key={i} src={`../img/heroesSkills/${classRef}/f${i}.jpg`} alt="icon skill" />
              )
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default MHeroes
