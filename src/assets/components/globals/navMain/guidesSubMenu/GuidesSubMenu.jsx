// ! SUBMENU DE GUÍA DE JUEGO

// ? REDUX:
    import { useSelector } from 'react-redux';
// ? RUTAS:
    import { Link } from "react-router-dom";
    // Data redireccionamiento
    import guides from '../../../pages/guides/guides';
 
const SubMenu = ({active}) => { 

    const {texts} = useSelector(state => state.languages)
 
    return (
        <>
            {active &&
 
            <nav className="subMenu">
                <ol className="subMenu__list"> 

                    { guides.map((item, i) => 
                            <Link to={`/guides/${item[2]}`} key={i}>
                                <li className="list__item"> 
                                    {texts.guides.gBtns[i]}
                                </li>
                            </Link>
                        ) 
                    }

                </ol>
            </nav> 
            
            }
        </>
    )
}


export default SubMenu;