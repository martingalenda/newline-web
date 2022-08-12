import {useEffect, useContext} from 'react';
import LangContext from '../../../../context/LangContext';
import WOW from 'wowjs';
import chap1 from './media/chap1.png';
import chap2 from './media/chap2.png';
import chap3 from './media/chap3.jpg';

const StoryExtend = () => {

    const { texts } = useContext(LangContext);

    useEffect(() => {
        const newWOW = () => {new WOW.WOW({live: false}).init();}
        newWOW()
    }, []);
    
    return(
        <section className="storyExt wow animate__fadeIn" data-wow-duration="1.5s">

            <div className="storyExt__bg--opacity"/>

            <div className="storyExt__container">

                <div id="chap1" className="container__chap"> 
                    <div className="chap__bg">
                        <img className="chap__img1" src={chap1} alt="Chapter 1" />
                        <h3 className="chap__num">{texts.story.chapter} I</h3>
                        <h2 className="chap__title">{texts.story.c1title}</h2>
                        <p className="chap__txt">{texts.story.c1txt}</p>
                    </div>      
                        
                </div>     

                <div id="chap2" className="container__chap">   
                    <div className="chap__bg">             
                        <img className="chap__img2" src={chap2} alt="Chapter 2" />
                        <h3 className="chap__num">{texts.story.chapter} II</h3>
                        <h2 className="chap__title">{texts.story.c2title}</h2>
                        <p className="chap__txt">{texts.story.c2txt}</p>
                    </div>
                </div>    

                <div id="chap3" className="container__chap">   
                    <div className="chap__bg">              
                        <img className="chap__img3" src={chap3} alt="Chapter 3" />
                        <h3 className="chap__num">{texts.story.chapter} III</h3>
                        <h2 className="chap__title">{texts.story.c3title}</h2>
                        <p className="chap__txt">{texts.story.c3txt}</p>
                    </div>
                </div>      
                          
            </div>
        </section>
    );
}

export default StoryExtend;