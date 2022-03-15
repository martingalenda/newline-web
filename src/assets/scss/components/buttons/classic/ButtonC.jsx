import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ButtonC extends Component{

    render() {
        return(
            <Link to={this.props.link}>
            <button className="btnC-d1">{this.props.text}</button>
            </Link>
        );
    }
}

export default ButtonC;