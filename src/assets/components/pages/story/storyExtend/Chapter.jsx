// ? REDUX:
    import { useSelector } from 'react-redux';

const Chapter = ({ children, chapLogo, chapTitle, index, chapNumber }) => {
    
    const {texts} = useSelector(state => state.languages)

    return (
        <div className="container__chap"> 
            <div className="chap__bg">
                <img className={`chap__img${index}`} src={chapLogo} alt={`Chapter ${index}`} />
                <h3 className="chap__num"> {texts.story.chapter} {chapNumber} </h3>
                <h2 className="chap__title"> {chapTitle} </h2>
                {children}
            </div>                
        </div>     
    )
}

export default Chapter