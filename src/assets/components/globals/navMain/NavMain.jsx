// ? REDUX:
    import { useSelector } from 'react-redux';
// ? RUTAS:
    import { Link, NavLink } from "react-router-dom"; // Enrutado
// ? IMGS
    import logoFlag from './media/flagLogo.png';
    // fa-icons:
    import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
    import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
// ? COMPONENTS:
    import UserLogged from './logged/UserLogged.jsx';
    import UserLoggedOut from './loggedOut/UserLoggedOut.jsx';
    import {useModals} from "../../../hooks/useModals"
    import GuidesSubMenu from "./guidesSubMenu/GuidesSubMenu"
    import Lang from './language/Lang.jsx';

 
const NavMain = () => {

    const { texts } = useSelector(state => state.languages)
    const { nick } = useSelector(state => state.users)

    const [isActiveLang, openLang, closeLang] = useModals()
    const [isActiveGuidesSubMenu, openGuidesSubMenu, closeGuidesSubMenu] = useModals()

        return( 
            <nav className="navMain">
                
                <div className="navMain__container" >
                    <div className="container__logo">
                        <Link to="/home">
                            <img className='logo__flag' src={logoFlag} alt="logo" />
                        </Link>
                    </div>

                    <div className="container__menu">                    
                        <ol>
                            <li className='menu__item'> <NavLink to="/news" activeclassname="active"> {texts.navMain.news} </NavLink> </li>
                            <div className='guidesSubMenu' onMouseLeave={closeGuidesSubMenu}>
                                <li className='menu__item' onMouseEnter={openGuidesSubMenu} > 
                                    <NavLink to="/info" activeclassname="active"> {texts.navMain.gameInfo} </NavLink>
                                </li>
                                <GuidesSubMenu active={isActiveGuidesSubMenu} close={closeGuidesSubMenu}/> 
                            </div>
                            <li className='menu__item'> <NavLink to="/story" activeclassname="active"> {texts.navMain.story} </NavLink></li>
                            <li className='menu__item'> <a href="https://discord.gg/MAgX8rzWKU" target='_blank' rel='noreferrer'>{texts.navMain.community} </a></li>
                        </ol>
                    </div>                
                    
                    <div className='container__user'>

                        <div className="user__language" onMouseLeave={closeLang}>
                            <button className="language__show" onMouseEnter={openLang}>
                                <FontAwesomeIcon icon={faGlobeAmericas}/>
                            </button>
                            <Lang active={isActiveLang}/>    
                        </div>

                        { !nick ? <UserLoggedOut/> : <UserLogged/> }
                    </div>    

                </div>

                

            </nav>
        );
}

export default NavMain;