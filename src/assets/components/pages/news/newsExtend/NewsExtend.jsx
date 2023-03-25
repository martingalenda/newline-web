// ? REDUX:
    import {useSelector} from 'react-redux';
// ? RUTAS:
    import {useParams} from 'react-router'
// ? WOW ANIMATION:
    import useWow from '../../../../hooks/useWow';
    import {useNewsIDManager} from '../../../../hooks/useNewsIDManager';
// ? COMPONENTS:
    import NewContainer from './NewContainer';
    import MoreNews from './MoreNews';
    import PremiumBtn from '../../../globals/buttons/premiumBtn/PremiumBtn';
    import FixedAction from '../../../globals/buttons/fixedAction/FixedAction'
    import NotFound from '../../notFound/NotFound';
// ? IMG:
    import Drake from './media/bgNewsExt.png';

const NewsExtend = () => {

    useWow()

    const {texts} = useSelector(state => state.languages)

    let {url} = useParams();
    const [linkID, prevID, nextID] = useNewsIDManager(url);

    return (
        <>
            { 
                texts.news[linkID] ? (
                    <section className="newsExt wow animate__fadeIn" data-wow-duration="1.5s">
                        <div className="linesEffect"/>
                        <img className="newsExt__Drake" src={Drake} alt="Drake" />
                        <NewContainer linkID={linkID}>
                            <p dangerouslySetInnerHTML={{__html: texts.news[linkID].txt}}/>
                        </NewContainer>
                        <MoreNews prevID={prevID} nextID={nextID}/>
                        <FixedAction/>
                        <PremiumBtn/>
                    </section>
                )             
                :
                ( <NotFound/> )
            }
        </>
    );
}

export default NewsExtend
