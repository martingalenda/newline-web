// ? REDUX:
    import {useSelector} from 'react-redux';

const NewContainer = ({children, linkID}) => {

    const {texts} = useSelector(state => state.languages)

    return (
        <div className="newsExt__container">
            <h2 className="container__title"> {texts.news[linkID].title} </h2>
            <time className="container__date" dateTime={texts.news[linkID].date}> {texts.news[linkID].date} </time>
            <div className={`container__type container__type-${texts.news[linkID].type}`}>
                <span> {texts.news[linkID].type} </span>
            </div>
            <div className="container__new">
                {children}
            </div>
        </div>
    )
}

export default NewContainer