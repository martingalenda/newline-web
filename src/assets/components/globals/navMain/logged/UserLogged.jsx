import {useContext} from 'react';     
import SubMenu from './subMenu/SubMenu.jsx';
import UserContext from '../../../../context/UserContext';
import {useModals} from "../../../../hooks/useModals"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

const UserLogged = () => { 

    const [isActiveSubMenu, openSubMenu, closeSubMenu] = useModals()

    const { user } = useContext(UserContext);

    return (
        <div className="user__logged" onMouseLeave={closeSubMenu}>
            <div className="logged__btn" onMouseEnter={openSubMenu}>  
                <span className="userAcc">{user.nick}</span>
                <FontAwesomeIcon icon={faAngleDown}/>  
            </div>
            <SubMenu active={isActiveSubMenu} close={closeSubMenu}/> 
        </div>
    )
}

export default UserLogged;