import {useState, useEffect, useContext} from 'react'; 
import LangContext from '../../../../context/LangContext';
import { useParams } from 'react-router';
import WOW from 'wowjs';
import Drake from './media/bgNewsExt.png';
import CardNew from '../cardNew/CardNew.jsx';

const NewsExtend = () => {

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);

    const { texts } = useContext(LangContext);

    let { id } = useParams()

    // Aca necesito recibir el id de la noticia desde el componente cardNew, para poder imprimir el texto correspondiente al objeto json
    const [newExtID] = useState(id) // New extend ID - probablemente pueda no ser estado

    // Validating next/prev infinite
    const prevNewID = (newExtID) => {
        let prevNewId = parseInt(newExtID) - 1
        if (prevNewId < 0)
            prevNewId = texts.news.length - 1
        return(prevNewId)
    }
    const nextNewID = (newExtID) => {
        let nextNewId = parseInt(newExtID) + 1
        if (nextNewId > (texts.news.length - 1))
            nextNewId = 0
        return(nextNewId)
    }

    // Next/Prev infinite ID's
    const [nextID] = useState(nextNewID(newExtID)) // - probablemente pueda no ser estado
    const [prevID] = useState(prevNewID(newExtID)) // - probablemente pueda no ser estado

    return (
            <section className="newsExt wow animate__fadeIn" data-wow-duration="1.5s">
                <div className="linesEffect"/>
                <img className="newsExt__Drake" src={Drake} alt="Drake" />

                <div className="newsExt__container">
                    <h2 className="container__title">{texts.news[newExtID].title}</h2>
                    <time className="container__date" dateTime={texts.news[newExtID].date}>{texts.news[newExtID].date}</time>
                    <div className={`container__type container__type-${texts.news[newExtID].type}`}>
                        <span>{texts.news[newExtID].type}</span>
                    </div>
                    <div className="container__new"><p>{texts.news[newExtID].txt}</p></div>
                </div>
                
                <div className="moreNews">   
                    <CardNew
                        ident={prevID} 
                        title={texts.news[prevID].title} 
                        type={texts.news[prevID].type} 
                        date={texts.news[prevID].date} 
                        intro={texts.news[prevID].intro}
                        url={texts.news[prevID].url}
                        bg={`newsBg${[prevID]}`} />
                    <CardNew
                        ident={nextID} 
                        title={texts.news[nextID].title} 
                        type={texts.news[nextID].type} 
                        date={texts.news[nextID].date} 
                        intro={texts.news[nextID].intro}
                        url={texts.news[nextID].url}
                        bg={`newsBg${[nextID]}`}  />
                </div>
            </section>
    );
}

export default NewsExtend
