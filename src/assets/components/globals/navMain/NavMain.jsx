import React from 'react';
import logoFlag from './media/flagLogo.png';
import { Link, NavLink } from "react-router-dom"; // Enrutado
import navMain from './navMain.json';
import SubMenu from './subMenu/SubMenu.jsx';

/* FA ICONS */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

const NavMain = () => {

        /* const [show, setShow] = useState("default"); */
 
        return(
            <nav className="navMain">
                
                <div className="navMain__container">

                    <div className="container__logo">
                        <Link to="/home">
                            <img className='logo__flag' src={logoFlag} alt="logo" />
                        </Link>
                    </div>

                    <div className="container__menu">                    
                        <ol>
                            <li className='menu__item'> <NavLink to="/news" activeclassname="active">{navMain.navMain.news}</NavLink></li>
                            <li className='menu__item'> <NavLink to="/about" activeclassname="active">{navMain.navMain.about}</NavLink></li>
                            <li className='menu__item'> <NavLink to="/guides" activeclassname="active">{navMain.navMain.guides}</NavLink></li>
                            <li className='menu__item'> <a href="https://discord.gg/MAgX8rzWKU" target='_blank' rel='noreferrer'>{navMain.navMain.community} </a></li>
                        </ol>
                    </div>                  
                    
                    <div className='container__user'>

                        <button className="user__language"><FontAwesomeIcon icon={faGlobeAmericas}/></button>

                        <div className="user__loggedOut">
                            <div className="user__register menu__item"><Link to="/register" className="registerBtn">{navMain.navMain.register}</Link></div>
                            <div className="user__login"><NavLink to="/login" activeclassname="active"> <FontAwesomeIcon icon={faSignInAlt}/></NavLink></div>
                        </div>

                        <div className="user__logged">
                            <div className="logged__btn">  
                                <span className="userAcc">Redline</span>
                                <FontAwesomeIcon icon={faAngleDown}/>  
                            </div>
                            <SubMenu/>
                        </div>

                    </div>    

                </div>

            </nav>
        );
}

export default NavMain;