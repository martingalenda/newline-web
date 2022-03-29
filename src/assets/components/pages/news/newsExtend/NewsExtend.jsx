import React from 'react';
import WOW from 'wowjs';
import Drake from './media/bgNewsExt.png';
import CardNew from '../cardNew/CardNew.jsx';
/* import newsExtend from './newsExtend.json'; */
import n1 from './media/n1.png'

const NewsExtend = () => {

    const newWOW = () => {new WOW.WOW().init();}
    newWOW()

    return (
        <React.Fragment>
            <section className="newsExt wow animate__fadeIn" data-wow-duration="1.5s">
                <div className="linesEffect"/>
                <img className="newsExt__Drake" src={Drake} alt="Drake" />

                <div className="newsExt__container">
                    <h2 className="container__title">Acceso al beta</h2>
                    <time className="container__date" dateTime="2021-12-03 22:15">03.12.2021</time>
                    <div className="container__type"><span>Events</span></div>
                    <div className="container__new">
                        <p>Ha sido un largo camino, unos 8 años duros, pero apasionantes sin duda, de aquellos que te hacen sentir vivo. Aún contra todo pronostico lo hemos logrado. Y le agradecemos a todos aquellos que han intervenido, y porque no también a quienes no confiaban en nosotros, nos han dado la fuerza suficiente para llegar hasta acá, más renovados y solidos que nunca, preparados para ver como nuestra comunidad podrá disfrutar de lo bueno.</p>
                        <img src={n1} alt="L2" />
                        <p>Servidor único. en linea competitivo, estilo MOBA, basado en Lineage 2, quien combina y explota todas las mecanicas y habilidades propias de cada jugador, con la sinergia que este tenga con sus compañeros de equipo. En nuestro clásico modo de juego, dos equipo de nueve integrantes se enfrentaran cara a cara con sus Héroes en una battalla épica dentro de la nueva Arena Inferno. El objetivo principal de los participantes será lograr implementar tras cada partida la estrategia que crean más adecuada, para intentar derribar la base enemiga antes que el equipo contrario. Disfrutad.</p>
                        <p>Servidor único. en linea competitivo, estilo MOBA, basado en Lineage 2, quien combina y explota todas las mecanicas y habilidades propias de cada jugador, con la sinergia que este tenga con sus compañeros de equipo. En nuestro clásico modo de juego, dos equipo de nueve integrantes se enfrentaran cara a cara con sus Héroes en una battalla épica dentro de la nueva. El objetivo principal de los participantes será lograr implementar tras cada partida la estrategia que crean más adecuada, para intentar derribar la base enemiga antes que el equipo contrario. Disfrutad.</p>
                    </div>
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