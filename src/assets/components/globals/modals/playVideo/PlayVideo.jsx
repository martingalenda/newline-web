// Reproductor media
const PlayVideo = ({url, title}) =>{
        return(
            <div className="modal__container playModal">
                <iframe 
                    loading="lazy" 
                    width="560" 
                    height="315" 
                    src={url} 
                    title={title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen=""/>
            </div>
        );
}

export default PlayVideo;