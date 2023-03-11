// ? REDUX:
    import { useSelector } from 'react-redux';
// ? SLIDER:
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
// ? COMPONENTS:
    import CardNew from '../cardNew/CardNew.jsx';


const SliderNews = () => {

    const {texts} = useSelector(state => state.languages)

    // Slider conf
    const settings = {
        dot: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 3,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1285,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,

              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }


    return(
        <div className="news__container1 wow animate__fadeInRight" data-wow-duration="1.5s">
            <Slider {...settings}>
                {   
                    // Recorro las noticias
                    texts.news.map((newI) => 
                        <CardNew 
                            key={newI.id}
                            ident={newI.id} 
                            url={newI.url} 
                            title={newI.title} 
                            type={newI.type} 
                            btnTxt={newI.btnTxt} 
                            date={newI.date} 
                            intro={newI.intro} 
                            bg={`newsBg${newI.id}`}  /> 
                    )
                }
            </Slider>
        </div>
    ); 
}

export default SliderNews;