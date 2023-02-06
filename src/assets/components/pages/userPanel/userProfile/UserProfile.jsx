import {useContext, useState} from 'react';
import LangContext from '../../../../context/LangContext';
import UserContext from '../../../../context/UserContext';

import ButtonC from '../../../globals/buttons/classicBtn/ButtonC';

import Modal from "../../../globals/modals/Modal"
import Donate from "../../../globals/modals/donate/Donate"
import {useModals} from "../../../../hooks/useModals"

const UserProfile = () => {

    const { texts } = useContext(LangContext); 
    const { user } = useContext(UserContext);
    const [donateTxt, setDonateTxt] = useState(`Newline Coins: ${user.coins}`)
    const [isActiveDonate, openDonate, closeDonate] = useModals()

    // Recibe el nivel de acceso del usuario, y retorna el string correspondiente
    const accessUser = (access) => {
        switch (access) {
            case 10: 
                return("Noble")
            case 20:
                return("Baron")
            case 30:
                return("Hero")
            case 40:
                return("Sponsor")
            case 50:
                return("Outstanding")
            case 100:
                return("GOD")
            default:
                return(texts.userPanel.notAccess)
        }
    }

    return(
        <>
            <div className="userProfile">
                <div className="user__avatar" onMouseEnter={() => console.log("Cambiar avatar")}>
                    <img src="/img/Avatar.jpg" className="avatar" alt="avatar"/>
                </div>
                
                <ol className="user__info">
                    <li>{texts.userPanel.nick}: <span>{user.nick}</span></li>
                    <li>Rank: <span>{user.userRank}</span></li>
                    <li>{texts.userPanel.accLvl}: <span>{user.accLvl}</span> </li>
                    {
                        (user.access >= 10) &&
                            <li>{texts.userPanel.access}: <span className={accessUser(user.access)}>{accessUser(user.access)}</span></li>
                    }
                    <button className="nlCoins" 
                            onMouseEnter={() => setDonateTxt(texts.userPanel.donate)} 
                            onMouseLeave={() => setDonateTxt(`Newline Coins: ${user.coins}`)} 
                            onClick={() => openDonate()}>
                            {donateTxt}
                    </button>

                    <div className="teams">
                        <li>Clan: <span>{user.clan}</span> | Rank: <span>{user.clanRank}</span> </li>
                        <li>{texts.userPanel.alliance}: <span>{user.alliance}</span> | Rank: <span>{user.allianceRank}</span></li>
                    </div>

                    <div className="actions">
                        { (user.access < 10) && <ButtonC btnClass="changePsw" text={texts.userPanel.premium} link="/premium"/> }
                        <ButtonC btnClass="changePsw" text={texts.navMain.subMenu.downloadNl} link="/guides/install"/>
                        <ButtonC btnClass="changePsw" text={texts.changePsw.title} link="/changepsw"/>
                    </div>

                </ol>
            </div>

            <Modal active={isActiveDonate} close={closeDonate}> 
                    <Donate close={closeDonate}/> 
            </Modal> 
        </>
    )
}

export default UserProfile