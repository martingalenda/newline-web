import React, { Component } from 'react';

class PlayBtn extends Component{
    render() {
        return(
            <div className="position">
                <button className="playBtn">
                    <div className="playIcon"></div>
                </button>
                <span className="playTxt">Ver Trailer</span>
            </div>
        );
    }
}

export default PlayBtn;