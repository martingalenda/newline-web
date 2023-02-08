// ? RUTAS:
    import { Link } from "react-router-dom";

const ButtonC = ({link = "#", btnClass, text, myOnClick, myTarget, myRel, myHref}) => {
    return (
        <>
            {
                myHref && 
                    <a target={myTarget} rel={myRel} href={myHref}>
                        <div className="btnD-container btnC-container">  
                            <button onClick={myOnClick} className={`btnD-${btnClass} btnC-${btnClass}`}>{text}</button>
                        </div>
                    </a>
                
            }
            {
                (myHref === undefined) && 
                    <Link to={link} target={myTarget} rel={myRel}>
                        <div className="btnD-container btnC-container">  
                            <button onClick={myOnClick} className={`btnD-${btnClass} btnC-${btnClass}`}>{text}</button>
                        </div>
                    </Link>        
            }
        </> 

    ) 

} 

export default ButtonC; 