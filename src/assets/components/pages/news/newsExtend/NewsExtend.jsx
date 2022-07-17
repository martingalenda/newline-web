import {useState} from 'react';
//import {useParams} from 'react-router-dom';
import WOW from 'wowjs';
import Drake from './media/bgNewsExt.png';
import CardNew from '../cardNew/CardNew.jsx';
import data from '../../../data/data.js'; 

const NewsExtend = (props) => {

    const newWOW = () => {new WOW.WOW({live: false}).init();}
    newWOW()

    const announce = data.news
    
    // const {id} = useParams() // Aca recibiría la url, pero la esta recibiendo como props...

    // Aca necesito recibir el id de la noticia desde el componente cardNew

    const [newExtID] = useState(props.newID) // New extend ID - probablemente pueda no ser estado

    // Validating next/prev infinite
    const prevNewID = (newExtID) => {
        let prevNewId = parseInt(newExtID) - 1
        if (prevNewId < 0)
            prevNewId = announce.length - 1
        return(prevNewId)
    }
    const nextNewID = (newExtID) => {
        let nextNewId = parseInt(newExtID) + 1
        if (nextNewId > (announce.length - 1))
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
                    <h2 className="container__title">{announce[newExtID].title}</h2>
                    <time className="container__date" dateTime={announce[newExtID].date}>{announce[newExtID].date}</time>
                    <div className={`container__type container__type-${announce[newExtID].type}`}>
                        <span>{announce[newExtID].type}</span>
                    </div>
                    <div className="container__new"><p>{announce[newExtID].txt}</p></div>
                </div>
                
                <div className="moreNews">   
                    <CardNew
                            ident={prevID} 
                            title={announce[prevID].title} 
                            type={announce[prevID].type} 
                            date={announce[prevID].date} 
                            intro={announce[prevID].intro} 
                            bg={`newsBg${[prevID]}`} />
                    <CardNew
                            ident={nextID} 
                            title={announce[nextID].title} 
                            type={announce[nextID].type} 
                            date={announce[nextID].date} 
                            intro={announce[nextID].intro} 
                            bg={`newsBg${[nextID]}`}  />
                </div>
            </section>
    );
}

export default NewsExtend;