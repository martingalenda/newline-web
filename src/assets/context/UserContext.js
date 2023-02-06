import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext() 

// ! VALOR INICIAL DEL ESTADO USER
// Valor del estado (user) vacio por defecto
const initialUser = {
    userName: null,
    nick: null,
    avatar: null,
    access: 0,
    coins: 0,
    accLvl: 1,
    userRank: "Vagabond",
    clan: "None",
    clanRank: "None",
    alliance: "None",
    allianceRank: "None"
} 
let userProfile = initialUser


// Detectamos si el localStorage, o el sessionStorage contienen almacenado el estado (user)
if (localStorage.getItem("user")) {
    userProfile = JSON.parse(localStorage.getItem("user"))
} else if (sessionStorage.getItem("user")) {
    userProfile = JSON.parse(sessionStorage.getItem("user"))
}

const UserProvider = ({children}) => {

    const [user, setUser] = useState(userProfile);
    const navigate = useNavigate()

    // Si el usuario decide recordar el usuario, almacenamos los datos en localStorage
    // De lo contrario, lo almacenamos en sessionStorage
    const logIn = (userData) => {
        navigate('/home') // Redireccion al index
        if (userData.rememberMe) {
            localStorage.setItem("user", JSON.stringify({userName: userData.user, nick: userData.user, avatar: null, access: 100, accLvl: 99, userRank: "Hero", coins: 200, clan: "None", clanRank: "None", alliance: "None", allianceRank: "None"}))
            setUser(JSON.parse(localStorage.getItem("user")))
        } else {
            sessionStorage.setItem("user", JSON.stringify({userName: userData.user, nick: userData.user, avatar: null, access: 0, accLvl: 1, userRank: "Vagabond", coins: 100, clan: "None", clanRank: "None", alliance: "None", allianceRank: "None"}))
            setUser(JSON.parse(sessionStorage.getItem("user")))
        }
    }

    const logOut = () => {
        navigate('/') // Redirección al index
        localStorage.removeItem("user")
        sessionStorage.removeItem("user")
        setUser(initialUser)
    }

    const data = {user, logIn, logOut}

    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider}
export default UserContext 