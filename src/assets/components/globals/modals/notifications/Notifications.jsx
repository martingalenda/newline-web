const Notifications = ({children, style, show, setShow}) =>{

        return( 
            <article className={`modal__container notifications ${style}`}>
                <button className="modal__x" onClick={() => setShow(!show)}>X</button>
                <div className="container__description">
                    {children}
                </div>
            </article>
        );
}

export default Notifications;