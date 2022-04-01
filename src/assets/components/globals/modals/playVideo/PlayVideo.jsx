import React from 'react'; 

// Reproductor trailer
const PlayVideo = () =>{
        return(
            <React.Fragment>
                <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/WosxYwhpVlQ?autoplay=1&mute=1&modestbranding=1&rel=0&theme=dark" title="Newline Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>  
            </React.Fragment>
        );
}

export default PlayVideo;