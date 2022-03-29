import React from 'react'; 

// Reproductor trailer
const ModalsT = ({type, show, setShow}) =>{
        return(
            <React.Fragment>
                {show &&
                <section className="modal">
                    <div className="modal__close" onClick={() => setShow(!show)} />
                    <div  className="modal__container">
                        {type}
                    </div>
                </section>
                }
            </React.Fragment>
        );
    
}

export default ModalsT;