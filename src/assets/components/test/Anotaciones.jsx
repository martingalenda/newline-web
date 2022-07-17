import {useState, useEffect} from 'react';

const Anotaciones = () => {
    const [numero, setNumero] = useState(10);

    useEffect( () => {
            console.log("useEffect de mierda")
        }
    )
    
    return(
        <div>
            <p>Total {numero}</p>
            <button onClick={() => setNumero(numero + 1)}>Contar</button>
        </div>
    )
    
}

export default Anotaciones;




/* Cosas interesantes

Usuario logeado

{ auth ? componentLogIn : componentLogOn}

*/
