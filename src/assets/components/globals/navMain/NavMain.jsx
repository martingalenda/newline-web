import {useState, useContext} from 'react';
import LangContext from '../../../context/LangContext';
import { Link, NavLink } from "react-router-dom"; // Enrutado
import logoFlag from './media/flagLogo.png';
import UserLogged from './logged/UserLogged.jsx';
import UserLoggedOut from './loggedOut/UserLoggedOut.jsx';
import Lang from './language/Lang.jsx';

/* FA ICONS */ 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
 
const NavMain = ({userLoged}) => {

        const [languagesShow, setLanguagesShow] = useState(false)
        
        const { texts } = useContext(LangContext);
 
        return(
            <nav className="navMain" onMouseLeave={() => setLanguagesShow(false)}>
                
                <div className="navMain__container" >

                    <div className="container__logo">
                        <Link to="/home">
                            <img className='logo__flag' src={logoFlag} alt="logo" />
                        </Link>
                    </div>

                    <div className="container__menu">                    
                        <ol>
                            <li className='menu__item'> <NavLink to="/news" activeclassname="active">{texts.navMain.news}</NavLink></li>
                            <li className='menu__item'> <NavLink to="/guides" activeclassname="active">{texts.navMain.guides}</NavLink></li>
                            <li className='menu__item'> <NavLink to="/story" activeclassname="active">{texts.navMain.story}</NavLink></li>
                            <li className='menu__item'> <a href="https://discord.gg/MAgX8rzWKU" target='_blank' rel='noreferrer'>{texts.navMain.community} </a></li>
                        </ol>
                    </div>                  
                    
                    <div className='container__user'>

                        <div className="user__language" >
                            <button className="language__show" onMouseEnter={() => setLanguagesShow(true)} >
                                <FontAwesomeIcon icon={faGlobeAmericas}/>
                            </button>
                            <Lang show={languagesShow}/>    
                        </div>

                        { !userLoged ? <UserLoggedOut/> : <UserLogged/> }

                    </div>    

                </div>

            </nav>
        );
}

export default NavMain;