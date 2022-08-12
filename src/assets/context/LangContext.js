import { createContext, useState } from "react";
import dataTxt from '../components/data/data.js'

const LangContext = createContext()


let initialLanguage = "en"

if (navigator.language === "es-419" || navigator.language === "es-AR") {
    initialLanguage = "es"
} 

const LangProvider = ({children}) => {

    const [texts, setTexts] = useState(dataTxt[initialLanguage]);

    const handleLanguageEN = () => {
        setTexts(dataTxt.en)
    }
    const handleLanguageES = () => {
        setTexts(dataTxt.es)
    }

    const data = {texts, handleLanguageEN, handleLanguageES}

    return(
        <LangContext.Provider value={data}>
            {children}
        </LangContext.Provider>
    )
}

export {LangProvider}
export default LangContext