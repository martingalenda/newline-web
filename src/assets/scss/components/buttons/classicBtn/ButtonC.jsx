import React from 'react';
import { Link } from "react-router-dom";

const ButtonC = (props) => {

        return(
            <Link to={props.link}>
            <button className="btnC-d1">{props.text}</button>
            </Link>
        );
}

export default ButtonC;