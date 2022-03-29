import React from 'react';

const CardNew = () => {
    return (
        <React.Fragment>
            <div className="cardNew"> 
                <div className="cardNew__container">                
                    <h3 className="container__title container__item">Acceso al beta</h3>
                    <div className="container__type container__item"><span>Events</span></div>
                    <time className="container__date container__item" dateTime="2021-12-03 22:15">03.12.2021</time>    
                    <p className="container__intro container__item">Saludos comunidad. Las últimas optimizaciones nos traen un juego mucho más dinamico. Seguimos enfocados en la búspueda de ... Somos un servidor privado de L2 orientado a la jugabilidad tipo M.O.B.A. Únicos en el género ... </p>
                    <button className="container__readMore">Seguir leyendo</button>
                </div>
            </div>
        </React.Fragment>  
    )
}

export default CardNew;
