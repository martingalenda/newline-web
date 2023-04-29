// ? REACT:
    import {useState} from 'react'
// ? IMG:
    import installBg from './media/installBg.mp4';
// ? COMPONENTS:
    import PremiumBtn from '../../../globals/buttons/premiumBtn/PremiumBtn';
    import StepsContainer from './StepsContainer';
// ? WOW:
    import useWow from '../../../../hooks/useWow'

const Install = () => {

    const [stopWow, setStopWow] = useState(false);
    useWow()

    return (
        <section className={`install ${!stopWow && "wow animate__fadeIn"}`} data-wow-duration="1.5s">
            {/* Background effect - video degradé */}
            <div className="install__bg--opacity"/>
            <div className="install__bg"> 
                <video autoPlay loop muted src={installBg} type="video/mp4" /> 
            </div>
            
            <StepsContainer setStopWow={setStopWow}/>
            <PremiumBtn/>
        </section>
    )
}

export default Install;