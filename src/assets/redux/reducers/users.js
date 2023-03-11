import {createSlice} from '@reduxjs/toolkit';

// Estado inicial:
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


export const users = createSlice({
    name: 'user',
    initialState: userProfile,
    reducers: {
        logIn: (state, action) => {  
             
            const userData = {
                userName: action.payload.userName,
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
            }

            if (action.payload.rememberMe) {
                localStorage.setItem("user", JSON.stringify(userData))
               // state = JSON.parse(localStorage.getItem("user"))
            } else {
                sessionStorage.setItem("user", JSON.stringify(userData))
                //state = JSON.parse(sessionStorage.getItem("user"))
            }
            
            state.userName = action.payload.userName
            state.nick = action.payload.nick
            state.avatar = action.payload.avatar
            state.access = action.payload.access
            state.coins = action.payload.coins
            state.accLvl = action.payload.accLvl
            state.userRank = action.payload.userRank
            state.clan = action.payload.clan
            state.clanRank = action.payload.clanRank
            state.alliance = action.payload.alliance
            state.allianceRank = action.payload.allianceRank
        },
        logOut: (state) => {
            localStorage.removeItem("user")
            sessionStorage.removeItem("user")
            state.userName = ""
            state.nick = ""
            state.avatar = ""
            state.access = ""
            state.coins = ""
            state.accLvl = ""
            state.userRank = ""
            state.clan = ""
            state.clanRank = ""
            state.alliance = ""
            state.allianceRank = ""
        }
    }
})

export const { logIn, logOut } = users.actions;
export default users.reducer;