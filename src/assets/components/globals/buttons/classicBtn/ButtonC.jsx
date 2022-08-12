import { Link } from "react-router-dom";

const ButtonC = (props) => {

        return(
            <Link to={props.link}>
                <div className="btnD-container">  
                    <button className={`btnD-${props.btnClass}`}>{props.text}</button>
                </div>
            </Link>
        );
}

export default ButtonC;