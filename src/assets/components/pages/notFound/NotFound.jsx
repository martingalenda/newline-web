// ? REDUX:
    import {useSelector} from 'react-redux';

const NotFound = () => {

    const {texts} = useSelector(state => state.languages)

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