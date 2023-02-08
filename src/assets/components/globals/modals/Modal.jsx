// Este componente representa al template más básico de los modales
// Se renderiza en el nodo html "modals" usando Portals de React

// ? REACT:
    import {useEffect} from 'react'
    import ReactDOM from 'react-dom';

const Modals = ({children, active, close}) => { 

    useEffect(() => {
        // Detecta si el usuario apreta escape para cerrar el modal
        const detectEsc = (e) => {
            if (e.key === 'Escape') {
                close()  
            }
        }
        document.addEventListener('keyup', detectEsc)
        return () => {
            document.removeEventListener('keyup', detectEsc)
        }
    })
        
    return ReactDOM.createPortal(
        <>
           {active &&
                <section className="modal">        
                    <div className="modal__close" onClick={close} />
                    {children}    
                </section>
            }  
        </>,
        document.getElementById("modals")
    );
    
}

export default Modals; 