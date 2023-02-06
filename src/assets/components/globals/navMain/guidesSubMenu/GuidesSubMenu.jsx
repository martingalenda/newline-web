// ! SUBMENU DE GUÍA DE JUEGO

import {useContext} from 'react';
import LangContext from '../../../../context/LangContext';
import { Link } from "react-router-dom";
import guides from '../../../pages/guides/guides';
 
const SubMenu = ({active}) => { 

    const { texts } = useContext(LangContext);
 
    return (
        <>
            {active &&
 
            <nav className="subMenu">
                <ol className="subMenu__list"> 

                    { guides.map((item, i) => 
                            <Link to={`/guides/${item[2]}`} key={i}>
                                <li className="list__item"> 
                                    {texts.guides.gBtns[i]}
                                </li>
                            </Link>
                        ) 
                    }

                </ol>
            </nav> 
            
            }
        </>
    )
}


export default SubMenu;