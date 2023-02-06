import { useEffect, useState, useContext} from 'react'; 
import {useParams} from 'react-router'
import LangContext from '../../../../context/LangContext';
import NotFound from '../../notFound/NotFound'
import WOW from 'wowjs';
import Drake from './media/bgNewsExt.png';
import CardNew from '../cardNew/CardNew.jsx';
import BetaBtn from '../../../globals/buttons/betaBtn/BetaBtn';
import FixedAction from '../../../globals/buttons/fixedAction/FixedAction'

const NewsExtend = () => {

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);

    const { texts } = useContext(LangContext)

    // Obtenemos el url y el ID de la noticia
    let {url} = useParams();
    let [linkID, setLinkID] = useState(texts.newsIDS[url])
    let [prevID, setPrevID] = useState(0)
    let [nextID, setNextID] = useState(0)

    // Cuando cambia el url, actualizamos los IDS
    useEffect(()=>{
        setLinkID(texts.newsIDS[url])

        const prevNewID = (newID) => {
            if (newID <= 0) {
                setPrevID(texts.news.length - 1)
            } else {
                setPrevID(parseInt(newID) - 1)
            }
        }
        const nextNewID = (newID) => {
            if (newID >= (texts.news.length - 1)) {
                setNextID(0)
            } else {
                setNextID(parseInt(newID) + 1)
            }
        }

        prevNewID(linkID)
        nextNewID(linkID)

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [url, linkID, texts])


    return (
        <>
            {/* Chequeo si existe el url en el json */}
            { texts.news[linkID] ? (
                <section className="newsExt wow animate__fadeIn" data-wow-duration="1.5s">
                    <div className="linesEffect"/>
                    <img className="newsExt__Drake" src={Drake} alt="Drake" />
    
                    <div className="newsExt__container">
                        <h2 className="container__title">{texts.news[linkID].title}</h2>
                        <time className="container__date" dateTime={texts.news[linkID].date}>{texts.news[linkID].date}</time>
                        <div className={`container__type container__type-${texts.news[linkID].type}`}>
                            <span>{texts.news[linkID].type}</span>
                        </div>
                        <div className="container__new"><p dangerouslySetInnerHTML={{__html: texts.news[linkID].txt}}></p></div>
                    </div>
                    
                    <div className="moreNews">   
                        <CardNew
                            ident={prevID} 
                            title={texts.news[prevID].title} 
                            type={texts.news[prevID].type} 
                            date={texts.news[prevID].date} 
                            intro={texts.news[prevID].intro}
                            url={texts.news[prevID].url}
                            btnTxt={texts.news[prevID].btnTxt}
                            bg={`newsBg${[prevID]}`} />
                        <CardNew
                            ident={nextID} 
                            title={texts.news[nextID].title} 
                            type={texts.news[nextID].type} 
                            date={texts.news[nextID].date} 
                            intro={texts.news[nextID].intro}
                            url={texts.news[nextID].url}
                            btnTxt={texts.news[nextID].btnTxt}
                            bg={`newsBg${[nextID]}`}  />
                    </div> 

                    <FixedAction/>
                    <BetaBtn/>

                </section>
             ) : ( <NotFound/> )
            }
        </>
    );
}

export default NewsExtend
