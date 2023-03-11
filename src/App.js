// ? ROUTES:
    import { Routes, Route } from "react-router-dom"; // Rutas del sitio
    import './assets/imports.scss'; // Sass Imports 
    import { ProtectedAccess, ProtectedLogIn, ProtectedLogOut } from "./assets/components/ProtectedRoutes";
    import NotFound from './assets/components/pages/notFound/NotFound.jsx'

// ? GLOBAL COMPONENTS
    import NavMain from './assets/components/globals/navMain/NavMain.jsx';
    import NavMobile from './assets/components/globals/navMobile/NavMobile.jsx';

// ? PAGES:
    // Index:
        import Hero from './assets/components/pages/hero/Hero.jsx';

    // Noticias:
        import News from './assets/components/pages/news/News.jsx';
        import NewsExtend from './assets/components/pages/news/newsExtend/NewsExtend.jsx';

    // Guía de juego:
        import Guides from './assets/components/pages/guides/Guides.jsx';
        import About from './assets/components/pages/guides/about/About.jsx';
        import GameModes from './assets/components/pages/guides/gameModes/GameModes.jsx';
        import Heroes from './assets/components/pages/guides/heroes/Heroes.jsx';
        import Arenas from './assets/components/pages/guides/arenas/Arenas.jsx';
        import Mobs from './assets/components/pages/guides/mobs/Mobs.jsx';
        import Install from './assets/components/pages/guides/install/Install.jsx';

    // Historia:
        import Story from './assets/components/pages/story/Story.jsx';
        import StoryExtend from './assets/components/pages/story/storyExtend/StoryExtend.jsx';

    // Acceso:
        import Register from './assets/components/pages/access/register/Register.jsx';
        import LogIn from './assets/components/pages/access/logIn/LogIn.jsx';
        import LostPsw from './assets/components/pages/access/lostPsw/LostPsw.jsx';
        import ChangePsw from './assets/components/pages/access/changePsw/ChangePsw.jsx';

    // Premium access:
        import Premium from './assets/components/pages/premium/Premium.jsx';

    // User panel:
        import UserPanel from './assets/components/pages/userPanel/UserPanel.jsx';


function App() {
    return (

        <>

            <NavMain />
            <NavMobile />

            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/home" element={<Hero/>} />
                <Route path="/news" element={<News/>} />
                <Route path="/news/:url" element={<NewsExtend/>} />
                <Route path="/guides" element={<Guides/>} />
                <Route path="/guides/about" element={<About/>} />
                <Route path="/guides/gamemodes" element={<GameModes/>} />
                <Route path="/guides/heroes" element={<Heroes/>} />
                <Route path="/guides/arenas" element={<Arenas/>} />
                <Route path="/guides/mobs" element={<Mobs/>} />
                <Route path="/guides/install" element={<Install/>} />
                <Route path="/story" element={<Story/>} />
                <Route path="/episode" element={<StoryExtend/>} />
                <Route path="/news/not_news" element={<StoryExtend/>} />

                {/* Si el usuario esta deslogeado, lo redirrecionamos a /logIn */}
                <Route element={<ProtectedLogIn redirectTo="/login"/>}>
                    <Route path="/changepsw" element={<ChangePsw/>} />
                    <Route path="/mypanel" element={<UserPanel/>} /> 
                </Route>

                {/* Si el usuario esta logeado, lo redirrecionamos a /myPanel */}
                <Route element={<ProtectedLogOut redirectTo="/"/>}>
                    <Route path="/register" element={<Register/>} /> 
                    <Route path="/login" element={<LogIn/>} />
                </Route>

                <Route path="/lostpsw" element={<LostPsw/>} />

                {/* Si el usuario ya posee el nivel de acceso beta, redirrecionamos a myPanel */}
                <Route path="/premium" element={
                    <ProtectedAccess redirectTo="/mypanel">
                        <Premium/>
                    </ProtectedAccess>
                } /> 

                <Route path="*" element={<NotFound/>} />
            </Routes>

        </>    

    );
};


export default App;