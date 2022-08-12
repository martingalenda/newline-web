import { useEffect, useContext } from 'react';
import LangContext from '../../../context/LangContext';
import { Link } from "react-router-dom";
import WOW from 'wowjs';
import guides from './guides.js';
import logo from './media/logoGuides.png'
import BetaBtn from '../../globals/buttons/betaBtn/BetaBtn.jsx';

const Guides = () => {

    const { texts } = useContext(LangContext);

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);

        return(
            <>
                <section className="guides wow animate__fadeIn" data-wow-duration="1.5s">

                    <h2 className="guides__title">{texts.guides.title}</h2>
                    <img className="guides__logo" src={logo} alt="Guides logo" />
                    <h3 className="guides__leyend">{texts.guides.subtitle1} <br/> {texts.guides.subtitle2}</h3>

                    <nav className="guides__sections">
                        <ol className="sections__buttons">
                            { guides.map((item, i) => 
                            <li className="buttons__imgs" key={i}> 
                            
                                <Link to={`/guides/${item[2]}`}>
                                    {<span className="imgs__section">{texts.guides.gBtns[i]}</span>}
                                    {<img src={item[1]} alt="Guides sections"/>}
                                </Link>

                            </li>) }
                        </ol>
                    </nav>                        
                </section>

                <BetaBtn />
            </>
        );
}

export default Guides;