import React from 'react';
import { Link } from "react-router-dom";

const ButtonC = (props) => {

        return(
            <Link to={props.link}>
            <button className={`btnC-${props.btnClass}`}>{props.text}</button>
            </Link>
        );
}

export default ButtonC;