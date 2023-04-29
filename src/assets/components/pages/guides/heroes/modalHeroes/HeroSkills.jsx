// ? COMPONENTS:
    import MuiTooltip from '../../../../globals/tooltip/MuiTooltip';
// ? REACT MUI:
    import Zoom from '@mui/material/Zoom';
// ? REDUX:
    import {useSelector} from 'react-redux';

const HeroSkills = ({hero, checked, classRef}) => {

    const {texts} = useSelector(state => state.languages)

    return (
      <div className="hero__skills">
          <h3> {texts.heroes.skills} </h3>

          <div className="skills__pasive">
              <img src={`../img/heroesSkills/${classRef}/p.jpg`} style={{cursor: 'initial'}} alt="icon pasive"/>
              <p>{hero[0].description}</p>
          </div>

          <div className="skills__active">
            {
                checked !== false &&
                    hero.map((skill, i) => 
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
    )
}

export default HeroSkills



