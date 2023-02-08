// ? IMGS:
    import esFlag from '../media/langs/esFlag.png';
    import engFlag from '../media/langs/engFlag.png'; 

// ? REDUX
    import {useDispatch} from 'react-redux'
    import { setLangEN, setLangES } from '../../../../redux/reducers/lang';

 
const Lang = ({active}) => {
   
    const dispatch = useDispatch()

    return (
        <>
            {active &&    
                <nav className="languages">
                    <ol className="languages__list">
                        <li onClick={() => dispatch(setLangEN())} className="list__item">
                            <span>ENG</span>
                            <img src={engFlag} alt="English"/>
                        </li>
                        <li onClick={() => dispatch(setLangES())} className="list__item">
                            <span>ES</span>
                            <img src={esFlag} alt="Español"/>
                        </li>
                    </ol>
                </nav>
            }
        </>
    )
}

export default Lang