import {createSlice} from '@reduxjs/toolkit'

// Textos de la aplicación
    import dataTxt from '../../components/data/data'

// Seteo inicial del idioma según el idioma del navegador:
    let initialLang = "en"
    if (navigator.language === "es-419" || navigator.language === "es-AR") {
        initialLang = "es"
    }  


export const langs = createSlice({
    name: 'lang',
    // El estado inicial depende o del localStorage, o del idioma configurado en el navegador del usuario
    initialState: {
        texts: dataTxt[localStorage.getItem("lang")] || dataTxt[initialLang]
    }, 
    reducers: {

        // Set de idioma para el usuario en localStorage:
        setLangEN: (state) => {
            localStorage.setItem("lang", "en")
            state.texts = dataTxt[localStorage.getItem("lang")]
        },
        setLangES: (state) => {
            localStorage.setItem("lang", "es")
            state.texts = dataTxt[localStorage.getItem("lang")]
        }

    }
})


export const { setLangEN, setLangES } = langs.actions;
export default langs.reducer;