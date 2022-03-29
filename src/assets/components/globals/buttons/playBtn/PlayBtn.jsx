import React from 'react';

const PlayBtn = ({show, setShow, text} ) => {
        return(
            <React.Fragment>
                <div className="position">
                    <button className="playBtn" onClick={() => setShow(!show)}>
                        <div className="playIcon"></div>
                    </button>
                    <span className="playTxt">{text}</span>
                </div>
            </React.Fragment>
        );
}

export default PlayBtn;