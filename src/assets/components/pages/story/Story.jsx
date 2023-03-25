// ? REDUX:
    import {useSelector} from 'react-redux';
// ? WOW ANIMATION:
    import useWow from '../../../hooks/useWow';
// ? IMG:
    import crown from './media/crown.png'
// ? COMPONENTS:
    import ClassicBtn from '../../globals/buttons/classicBtn/ClassicBtn';
    import PremiumBtn from '../../globals/buttons/premiumBtn/PremiumBtn';


const Story = () => {

    useWow()

    const {texts} = useSelector(state => state.languages)
    
    return(
        <section className="story wow animate__fadeIn" data-wow-duration="1.5s">
            <div className="story__bg--opacity"/>
            <div className="story__container">
                <img className="container__logoEp1" src={crown} alt="crown" />
                <h4 className="container__epNum">{texts.story.episode}</h4>
                <h3 className="container__epTitle">{texts.story.title}</h3>
                <ClassicBtn btnClass="story" text={texts.story.btn} link="/episode"/>
                <span className="container__leyend">... {texts.story.leyend} ...</span>
            </div>
            <PremiumBtn/>
        </section>
    );
}

export default Story;