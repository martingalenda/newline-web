// ! SUBMENU DE USUARIO LOGEADO

import {useContext} from 'react';
import LangContext from '../../../../../context/LangContext';
import UserContext from '../../../../../context/UserContext';
import { Link } from "react-router-dom";

import Modal from "../../../../globals/modals/Modal"
import Donate from "../../../../globals/modals/donate/Donate"
import {useModals} from "../../../../../hooks/useModals"
 
const SubMenu = ({active, close}) => { 

    const { texts } = useContext(LangContext);
    let { logOut } = useContext(UserContext);
    const [isActiveDonate, openDonate, closeDonate] = useModals()

    /* Fuerza el cierre del subMenu, al abrir el modal donaciones */
    const handleClickDonate = () => {
        close()
        openDonate()
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
                    
                    <li onClick={() => logOut()} className="list__item">{texts.navMain.subMenu.logOut}</li>

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