import {useState, useContext} from 'react';
import LangContext from '../context/LangContext.js';

const useNews = () => {

    // Setea la noticia seleccionada por el usuario
    let [newID, setNewID] = useState(0)

    const setNewsIdent = (id) => {
        console.log(id);
        setNewID(newID = id)
        console.log(newID)
    }

    const { texts } = useContext(LangContext);

    // Calcula / Valida la noticia anterior y siguiente
    const prevNewID = (newID) => {
        let prevNewID = parseInt(newID) - 1
        if (prevNewID < 0)
            prevNewID = texts.news.length - 1
        return(prevNewID)
    }
    const nextNewID = (newID) => {
        let nextNewID = parseInt(newID) + 1
        if (nextNewID > (texts.news.length - 1))
            nextNewID = 0
        return(nextNewID)
    }
    const [nextID] = useState(nextNewID(newID)) 
    const [prevID] = useState(prevNewID(newID)) 


    return {
        newID,
        setNewID,
        setNewsIdent,
        prevID,
        nextID
    }
}

export default useNews;