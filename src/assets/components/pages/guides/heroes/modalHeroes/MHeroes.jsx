// ? REACT:
  import { useState, useEffect } from 'react'
// ? REDUX:
  import {useSelector} from 'react-redux';
// ? COMPONENTS:
  import SelectHero from './SelectHero'
  import HeroSkills from './HeroSkills'
  import HeroDetails from './HeroDetails';
  import ControlModal from './ControlModal';

const MHeroes = ({race, setRace, close}) => {

  const {texts} = useSelector(state => state.languages)
  const data = texts.heroes.races

  // ? Estado
    const initialRef = data[race[0]][race[1]][0].ref // Nombre de la primer clase de la raza
    const initialHero = data[race[0]][race[1]][0][initialRef] // Objeto (data) de la clase en cuestión

    let [classId, setClassId] = useState(0) // Id de la clase
    const [classRef, setClassRef] = useState(initialRef) // Nombre de la clase
    const [hero, setHero] = useState(initialHero) // Objeto (data) de la clase

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
      setChecked(false)
      setTimeout(() => {
        setChecked(true);
      }, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[classRef]) 

  return (
    <div className="races__container">
      <div className="container__hero">
        <SelectHero racesData={data} raceSelect={race} setHero={setClassRef} classRef={classRef} setId={setClassId}/>
        <HeroDetails hero={hero} race={race}/>
        <HeroSkills hero={hero.skills} checked={checked} classRef={classRef}/>
        <ControlModal nextRace={nextRace} close={close}/>
      </div>
    </div>
  )
}

export default MHeroes