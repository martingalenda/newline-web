import {useState} from "react";

const ArenaBtn = ({name, img, setArena, animate}) => {

    const [arena] = useState(name.toLowerCase())

    return(
        <div className={`main__${arena} wow ${animate}`} data-wow-offset="180" data-wow-duration="1s" onClick={() => setArena(arena)}>
            <img className={`${arena}__btn`} src={img} alt={arena}/>
            <span>{name}</span>
        </div>
    )
}

export default ArenaBtn