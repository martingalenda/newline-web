import React from 'react';
import WOW from 'wowjs';
import Drake from './media/bgNewsExt.png';
import CardNew from '../cardNew/CardNew.jsx';

const NewsExtend = (props) => {

    const newWOW = () => {new WOW.WOW({live: false}).init();}
    newWOW() 

    return (
        <React.Fragment>
            <section className="newsExt wow animate__fadeIn" data-wow-duration="1.5s">
                <div className="linesEffect"/>
                <img className="newsExt__Drake" src={Drake} alt="Drake" />

                <div className="newsExt__container">
                    <h2 className="container__title">{props.title}</h2>
                    <time className="container__date" dateTime={props.dateTime}>{props.dateTime}</time>
                    <div className="container__type"><span>{props.type}</span></div>
                    <div className="container__new"> {props.txt} </div>
                </div>
                <div className="moreNews">     
                    <CardNew/>
                    <CardNew/>
                </div>
            </section>

        </React.Fragment>
    );
}

export default NewsExtend;