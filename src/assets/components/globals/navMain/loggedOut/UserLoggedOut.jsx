import {useContext} from 'react';  
import LangContext from '../../../../context/LangContext';
import { Link, NavLink } from "react-router-dom"; // Enrutado

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';

const UserLoggedOut = () => {
    const { texts } = useContext(LangContext); 
    return (
        <div className="user__loggedOut">
            <div className="user__register menu__item"><Link to="/register" className="registerBtn">{texts.navMain.register}</Link></div>
            <div className="user__login"><NavLink to="/login" activeclassname="active"> <FontAwesomeIcon icon={faSignInAlt}/></NavLink></div>
        </div>
    )
}

export default UserLoggedOut;