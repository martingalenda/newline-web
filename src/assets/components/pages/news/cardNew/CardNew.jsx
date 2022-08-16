import {useContext} from 'react';
import LangContext from '../../../../context/LangContext';
import useNews from '../../../../hooks/useNews.jsx';
import { Link } from "react-router-dom"; 

const CardNew = (props) => { 

    const { texts } = useContext(LangContext);

    const { setNewsIdent } = useNews();

    return ( 
        <div className={`cardNew ${props.bg} ${props.type}`}> 
            <div className="cardNew__container">                
                <h3 className="container__title container__item">{props.title}</h3>
                <div className={`container__type container__type-${props.type} container__item`}><span>{props.type}</span></div>
                <time className="container__date container__item" dateTime={props.date}>{props.date}</time>    
                <p className="container__intro container__item">{props.intro}</p>
                
                <Link onClick={() => setNewsIdent(props.ident)} to={`/news/${props.url}`}>
                    <button className="container__readMore">{texts.mainNews.readMore}</button>
                </Link>

            </div> 
        </div>
    )
}

export default CardNew; 
