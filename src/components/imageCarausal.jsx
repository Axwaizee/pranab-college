import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { initializeCarousalEventListener } from "./imageCarousalNavigator";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const ImageCarausal = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const pause = () => {
    sliderRef.slickPause();
  };
  const play = () => {
    sliderRef.slickPlay();
  };

  useEffect(() => {
    initializeCarousalEventListener();
  }, []);

  function buttonClick(pos) {
    console.log(`${pos} pressed`);
  }

  return (
    <div className="w-full mt-[60px] min-[200px]:max-[1180px]:mt-0">
      <div className="slider-container relative" id="slider">
        <div className="flex z-[999] absolute w-full h-full min-[200px]:max-[1180px]:hidden">
          <div
            className=" w-full h-full "
            onMouseEnter={pause}
            onMouseLeave={play}
            onClick={previous}
          ></div>
          <div
            className=" w-full h-full "
            onMouseEnter={pause}
            onMouseLeave={play}
            onClick={next}
          ></div>
        </div>
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          <div className="w-full">
            <img
              className="w-full h-[600px] min-[481px]:max-[1180px]:h-[500px] min-[200px]:max-[480px]:h-[250px] object-cover rounded-3xl"
              src="/public/assets/elements/ImageCarausal/1.jpg"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-[600px] min-[481px]:max-[1180px]:h-[500px] min-[200px]:max-[480px]:h-[250px] object-cover rounded-3xl"
              src="/public/assets/elements/ImageCarausal/2.jpg"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-[600px] min-[481px]:max-[1180px]:h-[500px] min-[200px]:max-[480px]:h-[250px] object-cover rounded-3xl"
              src="/public/assets/elements/ImageCarausal/3.jpg"
              alt=""
            />
          </div>
          <div className="w-full">
            <img
              className="w-full h-[600px] min-[481px]:max-[1180px]:h-[500px] min-[200px]:max-[480px]:h-[250px] object-cover rounded-3xl"
              src=" /public/assets/elements/ImageCarausal/2.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarausal;
