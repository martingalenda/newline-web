import {useContext} from 'react';
import LangContext from '../../../context/LangContext';
import UserContext from '../../../context/UserContext';
import { Link, NavLink } from "react-router-dom"; // Enrutado
import logoFlag from './media/flagLogo.png';
import UserLogged from './logged/UserLogged.jsx';
import UserLoggedOut from './loggedOut/UserLoggedOut.jsx';
import Lang from './language/Lang.jsx';
import {useModals} from "../../../hooks/useModals"
import GuidesSubMenu from "./guidesSubMenu/GuidesSubMenu"

/* FA ICONS */ 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
 
const NavMain = () => {

    const { texts } = useContext(LangContext); 
    const { user } = useContext(UserContext);
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
                                    <NavLink to="/guides" activeclassname="active"> {texts.navMain.guides} </NavLink>
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

                        { !user.nick ? <UserLoggedOut/> : <UserLogged/> }
                    </div>    

                </div>

                

            </nav>
        );
}

export default NavMain;