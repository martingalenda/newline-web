// Este componente representa al template más básico de los modales
// Se renderiza en el nodo html "modals"

import ReactDOM from 'react-dom';

const Modals = ({children, show, setShow}) =>{ 
        return ReactDOM.createPortal(
            <>
               {show &&
                    <section className="modal">               
                        <div className="modal__close" onClick={() => setShow(!show)} />
                        {children}    
                    </section>
                }  
            </>,
            document.getElementById("modals")
        );
    
}

export default Modals;