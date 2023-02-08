// ? REACT:
    import {forwardRef, useEffect } from 'react';
// ? WOW ANIMATION:
    import WOW from 'wowjs';

const InstallBox = (props, ref) => {

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);

    return (
        <div  ref={ref} className={`install__box wow ${props.wowAnimation} step${props.step}`} data-wow-duration="1.5s">
            <div className="install__box--info">
                <h3 className="install__box--title">{props.title}</h3>
                {props.children}
            </div>
            <span className="install__box--stepNumber">{props.step}</span>
        </div>
    )
}

const forwaredComponent = forwardRef(InstallBox)

export default forwaredComponent