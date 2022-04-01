import React from 'react';
import { Link } from "react-router-dom";
import data from '../../../data/data.js';

const SubMenu = () => {

    const subMenu = data.navMain.subMenu

    return (
        <nav className="subMenu">
            <ol className="subMenu__list">
                <Link to="/playbeta">
                    <li className="list__item list__info">{subMenu.betaAccess}<span className="info__pack">Hero</span></li>
                </Link>
                <li className="list__item list__info">Newline Coins = <span className="info__ncoins">0</span></li>
                
                <li className="list__item list__actions">{subMenu.downloadNl}</li>
                <Link to="/userpanel">
                    <li className="list__item list__actions">{subMenu.userPanel}</li>
                </Link>
                <li className="list__item list__actions">{subMenu.logOut}</li>
            </ol>
        </nav>
    )
}

export default SubMenu;