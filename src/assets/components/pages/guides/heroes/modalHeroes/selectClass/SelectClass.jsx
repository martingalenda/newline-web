import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const SelectClass = ({racesData, raceSelect, setHero, setId}) => {

    const {register, watch} = useForm();
    const heroSelects = watch('hero')

    const [isMount, setIsMount] = useState(false)

    useEffect(() => {
        if (isMount) {
            const result = heroSelects.split(",")
            setId(parseInt(result[1]))
            setHero(result[0])
        } else {
            setIsMount(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[heroSelects, isMount])

    return (

        <form className="hero__select">
          <select className="select_class" 
            {...register (
                "hero"
            )}>
            {
                racesData[raceSelect[0]][raceSelect[1]].map((hero, i) => 
                    <option 
                        key={hero.id} 
                        value={[hero.ref , hero.id]}
                        className="hero__option">
                        {hero[hero.ref].name}
                    </option>
                )
            }
          </select>
        </form>

    )
}

export default SelectClass

