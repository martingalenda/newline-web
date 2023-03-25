// ? REACT:
    import {useState} from 'react';
// ? WOW ANIMATION:
    import useWow from '../../../../hooks/useWow.jsx';
// ? COMPONENTS:
    import ArenaExtend from './arenaExtend/ArenaExtend.jsx'; // Extended arena
    import SelectArena from './SelectArena'

const Arenas = () => {

    useWow()

    let [arenas, setArenas] = useState("arenas");

    if(arenas === "arenas") 
        return (
            <SelectArena setArenas={setArenas}/>
        );

    else 
        return (
            <ArenaExtend arena={arenas} setArena={setArenas}/>
        );
}

export default Arenas;