import React, {useState} from 'react';
import logoFlag from './media/flagLogo.png';
import { Link, NavLink } from "react-router-dom"; // Enrutado
import data from '../../data/data.js';
import SubMenu from './subMenu/SubMenu.jsx';
import Lang from './language/Lang.jsx';

/* FA ICONS */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

const NavMain = () => {

        const [subMenuShow, setSubMenuShow] = useState(false)
        const [languagesShow, setLanguagesShow] = useState(false)
 
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
                            <li className='menu__item'> <NavLink to="/news" activeclassname="active">{data.navMain.news}</NavLink></li>
                            <li className='menu__item'> <NavLink to="/guides" activeclassname="active">{data.navMain.guides}</NavLink></li>
                            <li className='menu__item'> <NavLink to="/story" activeclassname="active">{data.navMain.story}</NavLink></li>
                            <li className='menu__item'> <a href="https://discord.gg/MAgX8rzWKU" target='_blank' rel='noreferrer'>{data.navMain.community} </a></li>
                        </ol>
                    </div>                  
                    
                    <div className='container__user'>

                        <div className="user__language" >
                            <button className="language__show" onMouseEnter={() => setLanguagesShow(true)} ><FontAwesomeIcon icon={faGlobeAmericas}/></button>
                            <Lang show={languagesShow}/>    
                        </div>
                        <div className="user__loggedOut">
                            <div className="user__register menu__item"><Link to="/register" className="registerBtn">{data.navMain.register}</Link></div>
                            <div className="user__login"><NavLink to="/login" activeclassname="active"> <FontAwesomeIcon icon={faSignInAlt}/></NavLink></div>
                        </div>
                       

                        <div className="user__logged" onMouseLeave={() => setSubMenuShow(false)}>
                            <div className="logged__btn" onMouseEnter={() => setSubMenuShow(true)}>  
                                <span className="userAcc">UserName</span>
                                <FontAwesomeIcon icon={faAngleDown}/>  
                            </div>
                            <SubMenu subMenuShow={subMenuShow}/> 
                        </div>

                    </div>    

                </div>

            </nav>
        );
}

export default NavMain;