import React from 'react'; 

// Reproductor trailer
const ModalsT = ({type, show, setShow}) =>{
        return(
            <React.Fragment>
               {show &&
                    <section className="modal">
                        
                        <div className="modal__close" onClick={() => setShow(!show)} />

                        {type}

                    </section>
                }  
            </React.Fragment> 
        );
    
}

export default ModalsT;