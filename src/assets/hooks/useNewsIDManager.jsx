// ? REACT:
    import { useEffect, useState} from 'react'; 
// ? REDUX:
    import { useSelector } from 'react-redux';

export const useNewsIDManager = (url) => {

    const {texts} = useSelector(state => state.languages)

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

    return [linkID, prevID, nextID]
}