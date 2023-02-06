import {useContext} from 'react';
import UserContext from '../context/UserContext.js';
import {Navigate, Outlet} from 'react-router-dom'

// ? Si el usuario esta deslogeado, lo redirrecionamos ...
export const ProtectedLogIn = ({children, redirectTo="/"}) => {

    const {user} = useContext(UserContext);

    if (!user.nick) {
        return <Navigate to={redirectTo}/>
    }
    return children ? children : <Outlet/>
}

// ? Si el usuario esta logeado, lo redireccionamos ...
export const ProtectedLogOut = ({children, redirectTo="/"}) => {

    const {user} = useContext(UserContext);

    if (user.nick) {
        return <Navigate to={redirectTo}/>
    }
    return children ? children : <Outlet/>
}

// ? Si el usuario ya posee el nivel de acceso beta, redirrecionamos ...
export const ProtectedAccess = ({children, redirectTo="/"}) => {

    const {user} = useContext(UserContext);

    if (user.access >= 10) {
        return <Navigate to={redirectTo}/>
    }
    return children ? children : <Outlet/>
}