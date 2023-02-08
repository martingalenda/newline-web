
// ? REDUX:
    import { useSelector } from 'react-redux';

// ? RUTAS:
    import { Link, NavLink } from "react-router-dom"; // Enrutado

// ? FA-icons
    import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
    import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';


    
const UserLoggedOut = () => {

    const {texts} = useSelector(state => state.languages)
    
    return (
        <div className="user__loggedOut">
            <div className="user__register menu__item"><Link to="/register" className="registerBtn">{texts.navMain.register}</Link></div>
            <div className="user__login"><NavLink to="/login" activeclassname="active"> <FontAwesomeIcon icon={faSignInAlt}/></NavLink></div>
        </div>
    )
}

export default UserLoggedOut;