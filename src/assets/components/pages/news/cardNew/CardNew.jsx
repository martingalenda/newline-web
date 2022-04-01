import React from 'react';

const CardNew = (props) => {

    return ( 
        <div className={`cardNew ${props.bg} ${props.type}`}> 
            <div className="cardNew__container">                
                <h3 className="container__title container__item">{props.title}</h3>
                <div className={`container__type container__type-${props.type} container__item`}><span>{props.type}</span></div>
                <time className="container__date container__item" dateTime={props.date}>{props.date}</time>    
                <p className="container__intro container__item">{props.txt}</p>
                <button className="container__readMore" onClick ={() => props.changeNew("readMore")}>Seguir leyendo
                </button>
            </div>
        </div>
    )

}

export default CardNew;
