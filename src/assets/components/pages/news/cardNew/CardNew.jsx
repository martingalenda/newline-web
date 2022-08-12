import {useContext} from 'react';
import LangContext from '../../../../context/LangContext';
import { Link } from "react-router-dom"; 

const CardNew = (props) => { 

    const { texts } = useContext(LangContext);

    return ( 
        <div className={`cardNew ${props.bg} ${props.type}`}> 
            <div className="cardNew__container">                
                <h3 className="container__title container__item">{props.title}</h3>
                <div className={`container__type container__type-${props.type} container__item`}><span>{props.type}</span></div>
                <time className="container__date container__item" dateTime={props.date}>{props.date}</time>    
                <p className="container__intro container__item">{props.intro}</p>
                
                <Link to={`/news/${props.url}/${props.ident}`} >
                    <button className="container__readMore" onClick={() => alert("entregar ID")}>{texts.mainNews.readMore}</button>
                </Link>

            </div> 
        </div>
    )
}

export default CardNew; 
