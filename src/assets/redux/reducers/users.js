import {createSlice} from '@reduxjs/toolkit';

// Estado inicial:
    const initialUser = {
        userName: null,
        pw: null,
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


export const users = createSlice({
    name: 'user',
    initialState: userProfile,
    reducers: {
        logIn: (state, action) => {   
            if (action.payload.rememberMe) {
                localStorage.setItem("user",
                    JSON.stringify({
                        userName: action.payload.userName,
                        pw: action.payload.pw,
                        nick: action.payload.nick,
                        avatar: action.payload.avatar,
                        access: 100,
                        coins: 9999,
                        accLvl: 100,
                        userRank: "Hero",
                        clan: "NewOrder",
                        clanRank: action.payload.clanRank,
                        alliance: "NewEmpire",
                        allianceRank: action.payload.allianceRank
                    })
                )
                state = JSON.parse(localStorage.getItem("user"))
            } else {
                sessionStorage.setItem("user",
                    JSON.stringify({ 
                        userName: action.payload.userName,
                        pw: action.payload.pw,
                        nick: action.payload.nick,
                        avatar: action.payload.avatar,
                        access: action.payload.access,
                        coins: action.payload.coins,
                        accLvl: action.payload.accLvl,
                        userRank: action.payload.userRank,
                        clan: action.payload.clan,
                        clanRank: action.payload.clanRank,
                        alliance: action.payload.alliance,
                        allianceRank: action.payload.allianceRank
                    })
                )
                state = JSON.parse(sessionStorage.getItem("user"))
            }
        },
        logOut: (state) => {
            localStorage.removeItem("user")
            sessionStorage.removeItem("user")
            state = initialUser
        }
    }
})

export const { logIn, logOut } = users.actions;
export default users.reducer;