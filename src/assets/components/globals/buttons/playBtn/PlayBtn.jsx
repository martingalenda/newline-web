const PlayBtn = ({open, text}) => {
        return(
            <>
                <div className="position">
                    <button className="playBtn" onClick={open}>
                        <div className="playIcon"></div>
                    </button>
                    <span className="playTxt">{text}</span>
                </div>
            </>
        );
} 

export default PlayBtn;