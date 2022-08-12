import {useState} from 'react';
import SubMenu from './subMenu/SubMenu.jsx';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

const UserLogged = () => {

    const [subMenuShow, setSubMenuShow] = useState(false) 

    return (
        <div className="user__logged" onMouseLeave={() => setSubMenuShow(false)}>
            <div className="logged__btn" onMouseEnter={() => setSubMenuShow(true)}>  
                <span className="userAcc">UserName</span>
                <FontAwesomeIcon icon={faAngleDown}/>  
            </div>
            <SubMenu subMenuShow={subMenuShow}/> 
        </div>
    )
}

export default UserLogged;