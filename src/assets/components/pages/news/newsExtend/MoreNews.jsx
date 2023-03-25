import { useSelector } from 'react-redux';
import CardNew from '../cardNew/CardNew.jsx';

const MoreNews = ({prevID, nextID}) => {

    const {texts} = useSelector(state => state.languages)

    return (
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
    )
}

export default MoreNews