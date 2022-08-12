import {useContext} from 'react';
import LangContext from '../../../../../context/LangContext';
import { Link } from "react-router-dom";
 
const SubMenu = ({subMenuShow}) => { 

    const { texts } = useContext(LangContext);

    return (
        <>
            {subMenuShow &&

            <nav className="subMenu">
                <ol className="subMenu__list">
                    <Link to="/playbeta">
                        <li className="list__item list__info">{texts.navMain.subMenu.betaAccess}<span className="info__pack">Hero</span></li>
                    </Link>
                    <li className="list__item list__info">Newline Coins = <span className="info__ncoins">0</span></li>
            
                    <li className="list__item list__actions">{texts.navMain.subMenu.downloadNl}</li>
                    <Link to="/userpanel">
                        <li className="list__item list__actions">{texts.navMain.subMenu.userPanel}</li>
                    </Link>
                    <li className="list__item list__actions">{texts.navMain.subMenu.logOut}</li>
                </ol>
            </nav> 
            
            }
        </>
    )
}


export default SubMenu;