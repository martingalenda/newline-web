// ? REACT:
  import { useState, useEffect} from 'react'
// ? REDUX:
  import { useSelector } from 'react-redux';
// ? Icons:
import CloseIcon from '@mui/icons-material/Close';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
// ? COMPONENTS:
  import MuiTooltip from '../../../../globals/tooltip/MuiTooltip';
  import SelectClass from './selectClass/SelectClass'
// ? REACT MUI:
  import Zoom from '@mui/material/Zoom';

const MHeroes = ({race, setRace, close}) => {

  const {texts} = useSelector(state => state.languages)
  const data = texts.heroes.races

  // ? Estado
    const initialRef = data[race[0]][race[1]][0].ref // Nombre de la primera clase de la raza
    const initialHero = data[race[0]][race[1]][0][initialRef] // Objeto de la clase seleccionada
    
    let [classId, setClassId] = useState(0)
    const [classRef, setClassRef] = useState(initialRef)
    const [hero, setHero] = useState(initialHero)

    const [checked, setChecked] = useState(false) // Animacion zoom icons

  // ? Raza siguiente:
    const nextRace = () => {
      if (race[0] === (data.length - 3)) {
        setRace([0, data[0].ref, data[0].name])
        setClassId(classId = 0)
      } else {
        setRace([(race[0] + 1), data[(race[0] + 1)].ref, data[(race[0] + 1)].name])
        setClassId(classId = 0)
      }
    }

  // ? Seteo de la "url" del Hero en el objeto data
    useEffect(()=> {
      setClassRef(data[race[0]][race[1]][classId].ref)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[classId, race]) 

    useEffect(() => {
       setHero(data[race[0]][race[1]][classId][classRef])
       setChecked(true)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[classRef, checked]) 

  return (
    <div className="races__container">

      <div className="container__hero">

      <SelectClass racesData={data} raceSelect={race} setHero={setClassRef} classRef={classRef}  setId={setClassId}/>

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

          <div className="hero__skills">
            <h3>{texts.heroes.skills}</h3>
            <div className="skills__pasive">
              <img src={`../img/heroesSkills/${classRef}/p.jpg`} style={{cursor: 'initial'}} alt="icon pasive"/>
              <p>{hero.skills[0].description}</p>
            </div>

            <div className="skills__active">
             {
               hero.skills.map((skill, i) => 
                !skill.f0 &&        
                  <MuiTooltip key={i} tData={
                   [
                     skill,
                     `../img/heroesSkills/${classRef}/f${i}.jpg`,
                     `${skill[`f${i}`]}`,
                     i,
                   ]} >
                   <Zoom in={checked} style={{ transitionDelay: `${String(i*75)}ms` }}>
                    <img  src={`../img/heroesSkills/${classRef}/f${i}.jpg`} alt="icon skill" />
                   </Zoom>
                 </MuiTooltip>         
               )
             }
            </div>
          </div>

          <div className="control__modal">
            <button className="next__race" onClick={() => nextRace()}>
              <FingerprintIcon className="race__icon"/>
            </button>
            <button className="close__modal" onClick={() => close()}>
              <CloseIcon className="close__icon"/>
            </button>
          </div>

      </div>
    </div>
  )
}

export default MHeroes