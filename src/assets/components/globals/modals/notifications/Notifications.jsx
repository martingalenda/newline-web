// ? REDUX:
    import { useSelector } from 'react-redux';

// ? COMPONENT:
    import ClassicBtn from '../../buttons/classicBtn/ClassicBtn';

    
const Notifications = ({children, style, close, isConfirmation, actionConfirm = () => {} }) => {

    const {texts} = useSelector(state => state.languages)

        return( 
            <article className={`modal__container notifications ${style}`}>
                <button className="modal__x" onClick={() => close()}>X</button>
                <div className="container__description">
                    {children}
                    {
                        isConfirmation ?
                        (
                            <div className="confirmation">
                                <ClassicBtn myOnClick={() => actionConfirm()} btnClass="notification" text={texts.modals.confirmation.confirm}/>
                                <ClassicBtn myOnClick={() => close()} btnClass="notification" text={texts.modals.confirmation.cancel}/>
                            </div>
                        ) :
                        (
                            <ClassicBtn myOnClick={() => close()} btnClass="notification" text="OK"/>
                        )
                    }

                </div>
            </article> 
        );
}
 
export default Notifications; 