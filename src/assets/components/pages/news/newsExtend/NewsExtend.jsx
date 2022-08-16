import { useEffect, useContext} from 'react'; 
import LangContext from '../../../../context/LangContext';
import useNews from '../../../../hooks/useNews.jsx'
import WOW from 'wowjs';
import Drake from './media/bgNewsExt.png';
import CardNew from '../cardNew/CardNew.jsx';

const NewsExtend = () => {

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);

    const { texts } = useContext(LangContext)
    const {newID, prevID, nextID} = useNews()
    console.log(newID)

    return (
        <>
            { ( newID >= 0 ) && ( newID < texts.news.length ) ? (
                <section className="newsExt wow animate__fadeIn" data-wow-duration="1.5s">
                    <div className="linesEffect"/>
                    <img className="newsExt__Drake" src={Drake} alt="Drake" />
    
                    <div className="newsExt__container">
                        <h2 className="container__title">{texts.news[newID].title}</h2>
                        <time className="container__date" dateTime={texts.news[newID].date}>{texts.news[newID].date}</time>
                        <div className={`container__type container__type-${texts.news[newID].type}`}>
                            <span>{texts.news[newID].type}</span>
                        </div>
                        <div className="container__new"><p>{texts.news[newID].txt}</p></div>
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
             ) : (
                    <section>
                        <span>
                            No encontramos lo que buscas
                        </span>
                    </section>
                )

            }
        </>
    );
}

export default NewsExtend
