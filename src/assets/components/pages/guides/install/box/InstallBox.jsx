const InstallBox = ({children, title, wowAnimation = " ", step}) => {

    return (
        <div className={`install__box wow ${wowAnimation}`} data-wow-duration="1.5s">
            <div className="install__box--info">
                <h3 className="install__box--title"> {title} </h3>
                {children}
            </div>
            <span className={`install__box--stepNumber step-${step}`}> {step} </span>
        </div>
    )
}

export default InstallBox