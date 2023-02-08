// ? REDUX:
    import { useSelector } from 'react-redux';
// ? COMPONENTS:  
    import SubMenu from './subMenu/SubMenu.jsx';
// ? MODALES:
    import {useModals} from "../../../../hooks/useModals"
// ? FA-icons:
    import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
    import {faAngleDown} from '@fortawesome/free-solid-svg-icons';


    
const UserLogged = () => { 

    const [isActiveSubMenu, openSubMenu, closeSubMenu] = useModals()

    const {nick} = useSelector(state => state.users) 

    return (
        <div className="user__logged" onMouseLeave={closeSubMenu}>
            <div className="logged__btn" onMouseEnter={openSubMenu}>  
                <span className="userAcc">{nick}</span>
                <FontAwesomeIcon icon={faAngleDown}/>  
            </div>
            <SubMenu active={isActiveSubMenu} close={closeSubMenu}/> 
        </div>
    )
}

export default UserLogged;