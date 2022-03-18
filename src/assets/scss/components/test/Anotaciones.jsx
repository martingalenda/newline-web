import React, {useState} from 'react';

const Anotaciones = () => {

    // Creamos una variable
    const soyVariable = "Nashe"

    // Creamos las propiedades del componente
    // const [propiedad, eventoModificador] =  useState();
    let [title, setTitle] = useState(" Apertura al beta ");
    let [array, setArray] = useState([1,2,3,4,5,6,7,8,9,10]);
    let [array2, setArray2] = useState([11,12,13,14,15]);

    // Creamos los eventos del componente, con distintas funcionalidades
    const cambioTitle = () => {
        setTitle(title = "Papurri modifica3")
    }

    const cambioArray = () => {
       let newArray = setArray(array = ["Pepe","12","13","14","15"]);
       return (
           newArray
       );
    }

    const sumoArrays = () => {
        setArray2(...array, ...array2);
    }

    return (
        <div className="test">
            <h1>Variable: <span>{soyVariable}</span></h1>
            <h2>Titulo: {title}</h2>
            <h3>Array: {array}</h3>
            <button className="btnC-test" onClick={cambioTitle}>Modifico titulo</button>
            <button className="btnC-test" onClick={cambioArray}>Modifico array</button>
            <button className="btnC-test" onClick={sumoArrays}>Sumo array</button>
            {
               array.map((item, i) => <p key={i}> {item} {i} </p>) /* {Recorro el array devolviendo los items en <p> }*/
            }
        </div>
    );
}

export default Anotaciones;
