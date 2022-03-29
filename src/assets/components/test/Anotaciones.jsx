// * EJ1: CON HOOKS:
import React from 'react';
import objetoJS from './objeto.js';
/* import objetoJSON from './objeto.json'; */

const Anotaciones = () => {

    const imgList = objetoJS.img.map((img, i) => <li key={i}><img className="list__imgs" src={img}  alt="infernoImgs" /></li>);
    

    return (
        <div className="test">
            
            <h2>TÍtulo: {objetoJS.title}</h2>

            {/* {Importo JS} */}
      {/*       <img src={objetoJS.img[0]} alt="img1" />
            <img src={objetoJS.img[1]} alt="img2" /> */}

            {imgList}
            
            {/* {Importo JSON} */}
{/*             <img src={objetoJS.img[0]} alt="" /> */}


        </div>
    );
}

export default Anotaciones;
