import {useContext} from 'react';
import LangContext from '../../../../context/LangContext';
import esFlag from '../media/langs/esFlag.png';
import engFlag from '../media/langs/engFlag.png'; 
 
const Lang = ({active}) => {
   
    const { handleLanguageEN, handleLanguageES } = useContext(LangContext);

    return (
        <>
            {active &&    
                <nav className="languages">
                    <ol className="languages__list">
                        <li onClick={handleLanguageEN} className="list__item">
                            <span>ENG</span>
                            <img src={engFlag} alt="English"/>
                        </li>
                        <li onClick={handleLanguageES} className="list__item">
                            <span>ES</span>
                            <img src={esFlag} alt="Español"/>
                        </li>
                    </ol>
                </nav>
            }
        </>
    )
}

export default Lang