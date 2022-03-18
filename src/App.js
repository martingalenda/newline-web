import React from 'react'; // React
import { Routes, Route } from "react-router-dom"; // Rutas del sitio
import './assets/scss/imports.scss'; // Sass Imports

/* Componentes: */
import NavMain from './assets/scss/components/navMain/NavMain';
import BetaBtn from './assets/scss/components/buttons/betaBtn/BetaBtn';

/* Vistas: */
import Hero from './assets/scss/pages/hero/Hero';
import News from './assets/scss/pages/news/News';
import About from './assets/scss/pages/about/About';
import Guides from './assets/scss/pages/guides/Guides';
import Story from './assets/scss/pages/story/Story';
import Register from './assets/scss/pages/register/Register';
import LogIn from './assets/scss/pages/logIn/LogIn';
import LostPsw from './assets/scss/pages/lostPsw/LostPsw';
import PlayBeta from './assets/scss/pages/playBeta/PlayBeta';
import UserPanel from './assets/scss/pages/userPanel/UserPanel';


function App() {
    return (

        <React.Fragment>
            <NavMain />

            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/home" element={<Hero/>} />
                <Route path="/news" element={<News/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/guides" element={<Guides/>} />
                <Route path="/story" element={<Story/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/lostpsw" element={<LostPsw/>} />
                <Route path="/playbeta" element={<PlayBeta/>} />
                <Route path="/mypanel" element={<UserPanel/>} />
            </Routes>

            <BetaBtn />  
        </React.Fragment>    

    );
};


export default App;