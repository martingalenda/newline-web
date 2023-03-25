// ? REACT:
    import { useState, useEffect } from 'react';
    import {useNavigate} from 'react-router-dom'
// ? Icons:
    import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
    import {faPlus, faArrowUp} from '@fortawesome/free-solid-svg-icons';

    
const FixedAction = () => {
    const [scrollY, setScrollY] = useState(0)
    const [icon, setIcon] = useState(faPlus)
    
    const navigate = useNavigate()

    // El boton cambia dependiendo la cantidad de scroll efectuado en el eje Y (estado scrollY)
    // Menos de 300, icono de +, al hacer click regresa a todas las noticias
    // Más de 300, icono flecha superior, al hacer click sube a la parte superior del viewport, dejando el eje Y en (0)
    useEffect(() => {
        const scrollYDetect = () => setScrollY(window.pageYOffset)
        scrollYDetect();
        window.addEventListener("scroll", scrollYDetect)
        if (scrollY > 300) {
            setIcon(faArrowUp)
        } else {
            setIcon(faPlus)
        }
        return () => {
            window.removeEventListener("scroll", scrollYDetect)
        }
    }, [scrollY, icon]);

    const handleClick = () => {
        (scrollY > 300) ? 
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
            :
            navigate("/news")
    }
 
    return (
        <>
            <div onClick={() => handleClick()} className="fixedAction">   
                <FontAwesomeIcon className="svg" icon={icon}/>
            </div>
        </>
    )
}


export default FixedAction