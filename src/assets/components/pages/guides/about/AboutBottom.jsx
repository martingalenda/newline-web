// ? REDUX:
    import { useSelector } from 'react-redux';
// ? IMGS:
    import bg_intro_br from './media/bg_intro_br.png';
    import bg_intro_bl from './media/bg_intro_bl.png';
// ? COMPONENTS:
    import ClassicBtn from '../../../globals/buttons/classicBtn/ClassicBtn';

const AboutBottom = ({stopWow}) => {

    const {texts} = useSelector(state => state.languages)

    return (
        <>
            <div className={`aboutNL__changes ${!stopWow && 'wow animate__fadeIn'}`} data-wow-offset="160" data-wow-duration="5.25s">
                <h2 className="changes__title">{texts.about.introTitle2}</h2>
                <p className="changes__parraph">{texts.about.introText2}</p>
                <ClassicBtn btnClass="playNow" text={texts.about.comeOn} link="/info/install"/>
            </div>
            <img className={`changes__bgFight changes__bgFight--left ${!stopWow && 'wow animate__fadeInLeft'}`} data-wow-offset="120" data-wow-duration="1.5s" src={bg_intro_bl} alt="Fight!" />
            <img className={`changes__bgFight changes__bgFight--right ${!stopWow && 'wow animate__fadeInRight'}`} data-wow-offset="120" data-wow-duration="1.5s" src={bg_intro_br} alt="Fight!" />
        </>
    )
}

export default AboutBottom