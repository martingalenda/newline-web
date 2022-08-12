import {useState} from 'react';
import Modal from '../globals/modals/Modal.jsx';
import Donate from '../globals/modals/donate/Donate.jsx';
/* import Notifications from '../globals/modals/notifications/Notifications.jsx' */

const Anotaciones = () => {
    const [show, setShow] = useState(true);

    return(
        <>
            <Modal show={show} setShow={setShow}>
                <Donate show={show} setShow={setShow}/> 
            </Modal> 
{/*         <Modal show={show} setShow={setShow}>
                <Notifications show={show} setShow={setShow} style={`success`}> 
                    <h2>Notification</h2>
                    <p>
                        Descripcion
                    </p>
                </Notifications>
            </Modal>  */}
        </>
    )  
}

export default Anotaciones;




/* Cosas interesantes

Usuario logeado

{ auth ? componentLogIn : componentLogOn}

*/
