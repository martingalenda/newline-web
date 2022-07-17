import { Fragment } from 'react';
import { Link } from "react-router-dom";
import WOW from 'wowjs';
import guides from './guides.js';
import logo from './media/logoGuides.png'
import BetaBtn from '../../globals/buttons/betaBtn/BetaBtn.jsx';

const Guides = () => {

        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()

        return(
            <Fragment>
                <section className="guides wow animate__fadeIn" data-wow-duration="1.5s">

                    <h2 className="guides__title">Guía de juego</h2>
                    <img className="guides__logo" src={logo} alt="Guides logo" />
                    <h3 className="guides__leyend">Una nueva Linea se traza. <br/> El juego se torna más dinámico que nunca.</h3>

                    <nav className="guides__sections">
                        <ol className="sections__buttons">
                            { guides.map((item, i) => 
                            <li className="buttons__imgs" key={i}> 
                            
                                <Link to={`/guides/${item[2]}`}>
                                    {<span className="imgs__section">{item[0]}</span>}
                                    {<img src={item[1]} alt="Guides sections"/>}
                                </Link>

                            </li>) }
                        </ol>
                    </nav>                        
                </section>

                <BetaBtn />
            </Fragment>
        );
}

export default Guides;