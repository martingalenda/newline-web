import React from 'react';

const PlayBtn = (props) => {
        return(
            <div className="position">
                <button className="playBtn">
                    <div className="playIcon"></div>
                </button>
                <span className="playTxt">{props.text}</span>
            </div>
        );
}

export default PlayBtn;