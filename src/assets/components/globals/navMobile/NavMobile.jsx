// ? REDUX:
    import { useSelector } from 'react-redux';
// ? IMGS
    import logoNl from './media/logoNl.png'
    // fa-icons
    import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//    import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
    import {faBars} from '@fortawesome/free-solid-svg-icons';
// ? RUTAS:
    import { Link } from "react-router-dom"; 
// ? COMPONENTS:
    import UserLogged from '../navMain/logged/UserLogged.jsx';
    import UserLoggedOut from '../navMain/loggedOut/UserLoggedOut.jsx';
//    import {useModals} from "../../../hooks/useModals"
//    import Lang from '../navMain/language/Lang';

const NavMobile = () => {

    const { nick } = useSelector(state => state.users)

//    const [isActiveLang, openLang, closeLang] = useModals()
    
    return(
        <nav className="navMobile">
            <FontAwesomeIcon className="menu__btn" icon={faBars}/>
            <Link className="nl__logo" to="/home"> <img src={logoNl} alt="logo"/> </Link>
            <div className='container__user'>
                { !nick ? <UserLoggedOut/> : <UserLogged/> }
            </div>  
        </nav>
    )
}

export default NavMobile