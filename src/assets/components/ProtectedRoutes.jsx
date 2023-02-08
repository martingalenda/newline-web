import { useSelector } from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom'

// ? Si el usuario esta deslogeado, lo redirrecionamos ...
export const ProtectedLogIn = ({children, redirectTo="/"}) => {

    const {nick} = useSelector(state => state.users);

    if (!nick) {
        return <Navigate to={redirectTo}/>
    }
    return children ? children : <Outlet/>
}

// ? Si el usuario esta logeado, lo redireccionamos ...
export const ProtectedLogOut = ({children, redirectTo="/"}) => {

    const {nick} = useSelector(state => state.users);

    if (nick) {
        return <Navigate to={redirectTo}/>
    }
    return children ? children : <Outlet/>
}

// ? Si el usuario ya posee el nivel de acceso beta, redirrecionamos ...
export const ProtectedAccess = ({children, redirectTo="/"}) => {

    const {access} = useSelector(state => state.users);

    if (access >= 10) {
        return <Navigate to={redirectTo}/>
    }
    return children ? children : <Outlet/>
}