import React from 'react';
import esFlag from '../media/langs/esFlag.png';
import engFlag from '../media/langs/engFlag.png';

const Lang = ({show}) => {
    return (
        <React.Fragment>
            {show &&            
                <nav className="languages">
                    <ol className="languages__list">
                        <li className="list__item">
                            <span>ENG</span>
                            <img src={engFlag} alt="English" />
                        </li>
                        <li className="list__item">
                            <span>ES</span>
                            <img src={esFlag} alt="Español" />
                        </li>
                    </ol>
                </nav>
            }
        </React.Fragment>
    )
}

export default Lang