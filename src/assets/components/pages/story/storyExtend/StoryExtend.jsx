// ? REDUX:
    import {useSelector} from 'react-redux';
// ? WOW ANIMATION:
    import useWow from '../../../../hooks/useWow';
// ? IMGS:
    import {chapLogos} from './media/media';
// ? COMPONENT:
    import Chapter from './Chapter'
    import StoryContainer from './StoryContainer';

const StoryExtend = () => {

    const {texts} = useSelector(state => state.languages)

    useWow()
    
    return(
        <section className="storyExt wow animate__fadeIn" data-wow-duration="1.5s">
            <div className="storyExt__bg--opacity"/>
            <StoryContainer>
                {
                    texts.story.chapters.map((chapter, i) => 
                        <Chapter 
                            chapLogo={chapLogos[i]} 
                            chapTitle={chapter.chapTitle}
                            chapNumber={chapter.chapNumber}
                            index={i} 
                            key={i}>
                            <p dangerouslySetInnerHTML={{__html: chapter.chapTxt}} className="chap__txt"/>
                        </Chapter>
                    )
                }               
            </StoryContainer>
        </section>
    );
}

export default StoryExtend;