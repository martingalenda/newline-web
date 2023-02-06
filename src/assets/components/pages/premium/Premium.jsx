import {useContext} from 'react';
import { Link } from 'react-router-dom';
import LangContext from '../../../context/LangContext';
import Package from './package/Package'
import Countdown from '../../globals/countdown/Countdown.jsx';

const Premium = () => { 

    const { texts } = useContext(LangContext);

    return(
        <>
            <section className="premium">
                <div className="premium--container">
                    {/* <span className="premium--coming">{texts.premium.main.coming}</span> */}
                    <Countdown date={'March 12 2023 10:32:53 GMT-0500'}/>
                    <h2 className="premium--title">{texts.premium.main.title}</h2>
                    <h2 className="premium--subTitle">{texts.premium.main.subTitle}</h2>

                    <div className="package--container">
                        <Package price={100} type="noble" btnTxt={texts.premium.main.addNoble}/>
                        <Package price={200} type="baron" btnTxt={texts.premium.main.addBaron}/>
                        <Package price={300} type="hero" btnTxt={texts.premium.main.addHero}/>
                    </div>
                </div>
                <Link className="faq" target="_blank" rel='noreferrer' to="/news/premium_access">{texts.premium.main.faq}</Link>
            </section>
        </>
    )
}

export default Premium;