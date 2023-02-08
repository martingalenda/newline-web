// ! SUBMENU DE USUARIO LOGEADO

// ? REDUX:
    import { useSelector, useDispatch } from 'react-redux';
    import {logOut} from '../../../../../redux/reducers/users'
    
// ? RUTAS:
    import { Link } from "react-router-dom";
    import { useNavigate } from "react-router-dom";

// ? MODALES:
    import Modal from "../../../../globals/modals/Modal"
    import Donate from "../../../../globals/modals/donate/Donate"
    import {useModals} from "../../../../../hooks/useModals"


const SubMenu = ({active, close}) => { 

    const {texts} = useSelector(state => state.languages) 
    const dispatch = useDispatch()

    const [isActiveDonate, openDonate, closeDonate] = useModals()

    /* Fuerza el cierre del subMenu, al abrir el modal donaciones */
    const handleClickDonate = () => {
        close()
        openDonate()
    }

    const navigate = useNavigate()
    const closeSession = () => {
        navigate('/')
        dispatch(logOut())
        window.location.reload(true)
    }
 
    return (
        <>
            {active &&
 
            <nav className="subMenu">
                <ol className="subMenu__list">

                    <Link to="/mypanel">
                        <li className="list__item">{texts.navMain.subMenu.userPanel}</li>
                    </Link>

                    <li onClick={handleClickDonate} className="list__item">{texts.navMain.subMenu.donations}</li>

                    <a target="_blank" rel='noreferrer' href="mailto:support@newlineg.com">
                        <li className="list__item">{texts.navMain.subMenu.support}</li>
                    </a>
                    
                    <li onClick={() => closeSession()} className="list__item">{texts.navMain.subMenu.logOut}</li>

                </ol>
            </nav> 
            
            }
            <Modal active={isActiveDonate} close={closeDonate}> 
                <Donate close={closeDonate}/> 
            </Modal> 
        </>
    )
}


export default SubMenu;