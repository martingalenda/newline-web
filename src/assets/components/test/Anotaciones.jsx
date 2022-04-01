// * EJ1: CON HOOKS:
import React, {useState} from 'react';
import objetoJS from './objeto.js';
/* import objetoJSON from './objeto.json'; */
import cardTest from './cardTest.js';

const Anotaciones = () => {

    const [newsGenerales] = useState(cardTest)

    for (const news of newsGenerales) {
        console.log(news)

    }

/*     Object.keys(newsGenerales.new1).forEach((e) => {
        console.log(e, ':', newsGenerales.new2[e]);
    }); */



    return (
        <div className="test">
            {
                newsGenerales.map((item, i ) => 
                <p >
                    titulo: ${item.title}
                </p>     

                )
            }
            <h2>TÍtulo: {objetoJS.title}</h2>

        </div>
    );
}

export default Anotaciones;
