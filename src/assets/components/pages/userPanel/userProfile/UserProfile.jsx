// ? REACT:
    import {useState} from 'react';
// ? REDUX:
    import { useSelector } from 'react-redux';
// ? MODALS:
    import ButtonC from '../../../globals/buttons/classicBtn/ButtonC';
    import Modal from "../../../globals/modals/Modal"
    import Donate from "../../../globals/modals/donate/Donate"
    import {useModals} from "../../../../hooks/useModals"


const UserProfile = () => {

    const {texts} = useSelector(state => state.languages) 
    const {nick, accLvl, userRank, access, coins, clan, clanRank, alliance, allianceRank} = useSelector(state => state.users) 
    const [donateTxt, setDonateTxt] = useState(`Newline Coins: ${coins}`)
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
                    <li>{texts.userPanel.nick}: <span>{nick}</span></li>
                    <li>Rank: <span>{userRank}</span></li>
                    <li>{texts.userPanel.accLvl}: <span>{accLvl}</span> </li>
                    {
                        (access >= 10) &&
                            <li>{texts.userPanel.access}: <span className={accessUser(access)}>{accessUser(access)}</span></li>
                    }
                    <button className="nlCoins" 
                            onMouseEnter={() => setDonateTxt(texts.userPanel.donate)} 
                            onMouseLeave={() => setDonateTxt(`Newline Coins: ${coins}`)} 
                            onClick={() => openDonate()}>
                            {donateTxt}
                    </button>

                    <div className="teams">
                        <li>Clan: <span>{clan}</span> | Rank: <span>{clanRank}</span> </li>
                        <li>{texts.userPanel.alliance}: <span>{alliance}</span> | Rank: <span>{allianceRank}</span></li>
                    </div>

                    <div className="actions">
                        { (access < 10) && <ButtonC btnClass="changePsw" text={texts.userPanel.premium} link="/premium"/> }
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