import React from 'react';
import { Link } from "react-router-dom";

const SubMenu = () => {
    return (
        <nav className="subMenu">
            <ol className="subMenu__list">
                <Link to="/playbeta">
                    <li className="list__item list__info">Acceso beta = <span className="info__pack">Hero</span></li>
                </Link>
                <li className="list__item list__info">Newline Coins = <span className="info__ncoins">0</span></li>
                
                <li className="list__item list__actions">Descargar Newline</li>
                <Link to="/userpanel">
                    <li className="list__item list__actions">Panel de usuario</li>
                </Link>
                <li className="list__item list__actions">Cerrar sesión</li>
            </ol>
        </nav>
    )
}

export default SubMenu;