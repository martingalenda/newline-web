// ? REDUX:
    import {useSelector} from 'react-redux';
// ? RUTAS:
    import {Link} from "react-router-dom";
// ? WOW ANIMATION:
    import useWow from '../../../hooks/useWow.jsx';
// ? REDIRECCION (Complement)
    import guides from './guides.js';
// ? IMG:
    import logo from './media/logoGuides.png'
// ? COMPONENTS:
    import PremiumBtn from '../../globals/buttons/premiumBtn/PremiumBtn.jsx';

const Guides = () => {

    const {texts} = useSelector(state => state.languages)

    useWow()

    return(
        <>
            <section className="guides wow animate__fadeIn" data-wow-duration="1.5s">
                <h2 className="guides__title"> {texts.guides.title} </h2>
                <img className="guides__logo" src={logo} alt="Guides logo" />
                <h3 className="guides__leyend"> {texts.guides.subtitle1} <br/> {texts.guides.subtitle2} </h3>

                <nav className="guides__sections">
                    <ol className="sections__buttons">
                        { 
                            guides.map((item, i) => 
                                <li className="buttons__imgs" key={i}> 
                                    <Link to={`/info/${item[2]}`}>
                                        <span className="imgs__section"> {texts.guides.gBtns[i]} </span>
                                        <img src={item[1]} alt="Guides sections"/>
                                    </Link>
                                </li>
                            ) 
                        }
                    </ol>
                </nav>                        
            </section>

            <PremiumBtn />
        </>
    );
}

export default Guides;