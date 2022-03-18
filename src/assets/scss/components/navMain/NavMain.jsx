import React from 'react';
import logoFlag from './media/flagLogo.png';
import { Link, NavLink } from "react-router-dom"; // Enrutado

/* FA ICONS */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';

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
                            <li className='menu__item'> <NavLink to="/news" activeclassname="active">News</NavLink></li>
                            <li className='menu__item'> <NavLink to="/about" activeclassname="active">About NL</NavLink></li>
                            <li className='menu__item'> <NavLink to="/guides" activeclassname="active">Guides</NavLink></li>
                            <li className='menu__item'> <a href="https://discord.gg/MAgX8rzWKU" target='_blank' rel='noreferrer'>Community </a></li>
                        </ol>
                    </div>                  
                    
                    <div className='container__user'>
                        <div className="user__register menu__item"><NavLink to="/register" activeclassname="active">Register</NavLink></div>
                        <div className="user__login"><NavLink to="/login" activeclassname="active"> <FontAwesomeIcon icon={faSignInAlt}/></NavLink></div>
                    </div>   

                </div>

            </nav>
        );
}

export default NavMain;