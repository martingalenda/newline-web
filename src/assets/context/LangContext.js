import { createContext, useState } from "react";
import dataTxt from '../components/data/data.js'

const LangContext = createContext() 
 
// Seteo inicial del idioma según el idioma del navegador
let initialLanguage = "en"
if (navigator.language === "es-419" || navigator.language === "es-AR") {
    initialLanguage = "es"
} 

// Provedor de textos/idiomas
const LangProvider = ({children}) => {

    // El siguiente estado inicia con el valor del localStorage si lo posee, de lo contrario, toma el default (initialLanguage)
    const [texts, setTexts] = useState(dataTxt[localStorage.getItem("lang")] || dataTxt[initialLanguage]);

    // Controladores de idioma para el usuario en localStorage
    const handleLanguageEN = () => {
        localStorage.setItem("lang", "en") 
        setTexts(dataTxt[localStorage.getItem("lang")])
    }
    const handleLanguageES = () => {
        localStorage.setItem("lang", "es") 
        setTexts(dataTxt[localStorage.getItem("lang")])
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