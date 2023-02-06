import {useContext} from 'react';
import LangContext from '../../../context/LangContext';

const NotFound = () => {

    const { texts } = useContext(LangContext)

    return (
        <section className="notFound">
            <div className="notFound__bg" />
            <div className="notFound__msg">
                <h2>Error 404</h2>
                <p>{texts.notFound.txt}</p>
            </div>
        </section>
    )
}

export default NotFound;