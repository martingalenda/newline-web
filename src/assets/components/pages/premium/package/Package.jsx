// ? REDUX:
    import { useSelector } from 'react-redux';
// ? MODALS:
    import Modal from "../../../globals/modals/Modal"
    import Donate from "../../../globals/modals/donate/Donate"
    import Notification from "../../../globals/modals/notifications/Notifications"
    import {useModals} from "../../../../hooks/useModals"
    import ButtonC from '../../../globals/buttons/classicBtn/ButtonC';

const Package = ({type, price, btnTxt}) => {

    const {texts} = useSelector(state => state.languages) 
    const {nick, coins} = useSelector(state => state.users) 

    const [isActiveDonate, openDonate, closeDonate] = useModals()
    const [isActiveN1, openN1, closeN1] = useModals()
    const [isActiveN2, openN2, closeN2] = useModals()

    // Si el usuario está logeado... Chequea si posee las NCoims correspondientes para adquirir el paquete seleccionado
    // Caso contrario, redirecciona a /login
    const buyPackage = (price) => {
        (coins >= price) ? openN2() : openN1()
    }

    // El usuario confirma que desea adquirir las NCoins necesarias para la compra.
    const confirmPurchase = () => {
        closeN1()
        openDonate()
    }

    return (
        <>
            <div className={`package package-${type}`}>
            <img className="package__logo" src={`img/${type}.png`} alt={type}/>
                <ol className="package__rewards">
                    {
                        // Recorro las recompenzas de los paquetes premium
                        texts.premium[type].map((reward, i) => 
                            <li key={i}> {reward.item} </li>
                        )
                    }
                </ol>
                {
                    (nick) ? 
                    <ButtonC myOnClick={() => buyPackage(price)} btnClass="premiumAccess" text={btnTxt}/> 
                    :
                    <ButtonC link="/login" myTarget="_blank" myRel="noreferrer" btnClass="premiumAccess" text={btnTxt}/>
                }
                
            </div>

            {/* Notificación: NCoins insuficientes. Confirmación de apertura (modal donaciones) */}
            <Modal active={isActiveN1} close={closeN1}> 
                <Notification style={`announce`} isConfirmation={true} actionConfirm={confirmPurchase} close={closeN1}> 
                    <p>{texts.modals.buyPackages.enoughNCoins}</p>
                </Notification>
            </Modal> 

            {/* Notificación/Confirmación de compra */}
            <Modal active={isActiveN2} close={closeN2}> 
                <Notification style={`announce`} isConfirmation={true} /* actionConfirm={confirmPurchase} */ close={closeN2}> 
                    <p>{`${texts.modals.buyPackages.confirmPurchase} ${type}?`}</p>
                </Notification>
            </Modal> 

            {/* Modal de donación */}
            <Modal active={isActiveDonate} close={closeDonate}> 
                <Donate close={closeDonate}/> 
            </Modal> 

        </>
    )
}

export default Package;