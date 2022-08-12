const PlayBtn = ({show, setShow, text}) => {
        return(
            <>
                <div className="position">
                    <button className="playBtn" onClick={() => setShow(!show)}>
                        <div className="playIcon"></div>
                    </button>
                    <span className="playTxt">{text}</span>
                </div>
            </>
        );
}

export default PlayBtn;