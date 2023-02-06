import {useContext} from 'react';
import LangContext from '../../../../context/LangContext';
import ButtonC from '../../buttons/classicBtn/ButtonC';

const Notifications = ({children, style, close, isConfirmation, actionConfirm = () => {} }) => {

    const { texts } = useContext(LangContext); 

        return( 
            <article className={`modal__container notifications ${style}`}>
                <button className="modal__x" onClick={() => close()}>X</button>
                <div className="container__description">
                    {children}
                    {
                        isConfirmation ?
                        (
                            <div className="confirmation">
                                <ButtonC myOnClick={() => actionConfirm()} btnClass="notification" text={texts.modals.confirmation.confirm}/>
                                <ButtonC myOnClick={() => close()} btnClass="notification" text={texts.modals.confirmation.cancel}/>
                            </div>
                        ) :
                        (
                            <ButtonC myOnClick={() => close()} btnClass="notification" text="OK"/>
                        )
                    }

                </div>
            </article> 
        );
}
 
export default Notifications; 