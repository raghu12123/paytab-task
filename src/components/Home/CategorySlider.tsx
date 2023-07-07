import { Container } from "react-bootstrap";
import Slider from "react-slick";
const CategorySlider = () => {
  const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4500,
      cssEase: "linear",
      pauseOnHover: false

  };
  return (
    <div className="mt-3">
      <Container>
      <Slider {...settings}>
      <div className="slider">
        <div className="slider-wrapper">
          <div className="slide">
            <div
              className="slide-bg"
              style={{ backgroundImage: `url("/sofa_4.jpg")` }}
            ></div>
          </div>
          
        </div>
      </div>
      <div className="slider">
        <div className="slider-wrapper">
          <div className="slide">
            <div
              className="slide-bg"
              style={{ backgroundImage: `url("/sofa_5.jpg")` }}
            ></div>
          </div>
          
        </div>
      </div>
      <div className="slider">
        <div className="slider-wrapper">
          <div className="slide">
            <div
              className="slide-bg"
              style={{ backgroundImage: `url("/sofa_6.jpg")` }}
            ></div>
          </div>
          
        </div>
      </div>
      </Slider>
      </Container>
    </div>
  );
};

export default CategorySlider;
