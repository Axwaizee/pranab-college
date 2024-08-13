import React, { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Testimonial.css";

import Slider from "react-slick";

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

const testimonial = {
  Alumni: [
    {
      image: `/assets/testimonials/alumni/test.jpg`,
      name: "George Shrivastav",
      course: { course: "B.A. English", batch: "2011-14" },
      testimonial:
        "adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar",
    },
    {
      image: "/assets/testimonials/alumni/test.jpg",
      name: "Leorio Shrivastav",
      course: { course: "B.A. English", batch: "2024-28" },
      testimonial:
        "adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar",
    },
    {
      image: "/assets/testimonials/alumni/test.jpg",
      name: "Kurapika Shrivastav",
      course: { course: "B.A. English", batch: "2024-28" },
      testimonial:
        "adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar",
    },
  ],
  Parents: [
    {
      image: "https://picsum.photos/200",
      name: "Mr. Arvindra Green",
      parentof: "Alferd",
      relation: "Father",
      testimonial:
        "adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar",
    },
    {
      image: "https://picsum.photos/200",
      name: "Mr. Arvindra Green",
      parentof: "alferd",
      relation: "Mother",
      testimonial:
        "adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar",
    },
    {
      image: "https://picsum.photos/200",
      parentof: "alferd",
      name: "Mr. Arvindra Green",
      relation: "Brother",
      testimonial:
        "adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar",
    },
    {
      image: "https://picsum.photos/200",
      parentof: "alferd",
      name: "Mr. Arvindra Green",
      relation: "Gardian",
      testimonial:
        "adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar",
    },
  ],
  Students: [
    {
      image: "https://picsum.photos/200",
      name: "Mr. Shivani Shrivastav",
      course: { course: "B.A. English", batch: "2011-14" },
      testimonial:
        "adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar",
    },
    {
      image: "https://picsum.photos/200",
      name: "Mr. Shivani Shrivastav",
      course: { course: "B.A. English", batch: "2011-14" },
      testimonial:
        "adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar",
    },
    {
      image: "https://picsum.photos/200",
      name: "Mr. Shivani Shrivastav",
      course: { course: "B.A. English", batch: "2011-14" },
      testimonial:
        "adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar",
    },
    {
      image: "https://picsum.photos/200",
      name: "Mr. Shivani Shrivastav",
      course: { course: "B.A. English", batch: "2011-14" },
      testimonial:
        "adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar",
    },
  ],
};

const alumniContent = () =>
  testimonial.Alumni.map((t) => (
    <div className="dark:text-white ">
      <div className="grid grid-cols-3 ">
        <div className=" flex items-center desk:justify-start justify-center col-span-1 row-span-3 min-[200px]:max-[480px]:order-1 min-[200px]:max-[480px]:col-span-1 ">
          <img
            className="wide:h-[350px] wide:w-[350px] desk:w-[270px] desk:h-[270px] min-[480px]:max-[1180px]:h-full min-[200px]:max-[480px]:rounded-full min-[200px]:max-[480px]:h-[100px] min-[200px]:max-[480px]:w-[100px]"
            src={t.image}
            alt=""
          />
        </div>
        <div className=" col-span-2 col-start-2 h-[160px] flex justify-center items-center min-[200px]:max-[480px]:order-4 min-[200px]:max-[480px]:col-start-1 min-[200px]:max-[480px]:col-span-3">
          <p className=" text-center font-inter font-light text-2xl min-[200px]:max-[480px]:text-lg min-[200px]:max-[480px]:text-left">
            "{t.testimonial}"
          </p>
        </div>
        <div className=" col-span-4 col-start-2 min-[200px]:max-[480px]:order-2 min-[200px]:max-[480px]:col-span-2 min-[200px]:max-[480px]:pl-8 min-[200px]:max-[480px]:mt-4">
          <p className=" font-inter font-medium text-xl text-center min-[200px]:max-[480px]:text-left min-[200px]:max-[480px]:text-base ">
            {t.name}
          </p>
        </div>
        <div className=" text-center font-inter font-medium text-base col-span-4 min-[200px]:max-[480px]:order-3 min-[200px]:max-[480px]:col-span-2 min-[200px]:max-[480px]:text-left min-[200px]:max-[480px]:pl-8 min-[200px]:max-[480px]:pt-1 min-[200px]:max-[480px]:text-sm">
          <p>{t.course.course}</p>
          <p>Batch:{t.course.batch}</p>
        </div>
      </div>
    </div>
  ));

const studentContent = () =>
  testimonial.Students.map((t) => (
    <div className="dark:text-white ">
      <div className="grid grid-cols-3 ">
        <div className=" flex items-center desk:justify-start justify-center col-span-1 row-span-3 min-[200px]:max-[480px]:order-1 min-[200px]:max-[480px]:col-span-1 ">
          <img
            className="wide:h-[350px] wide:w-[350px] desk:w-[270px] desk:h-[270px] min-[480px]:max-[1180px]:h-full min-[200px]:max-[480px]:rounded-full min-[200px]:max-[480px]:h-[100px] min-[200px]:max-[480px]:w-[100px]"
            src={t.image}
            alt=""
          />
        </div>
        <div className=" col-span-2 col-start-2 h-[160px] flex justify-center items-center min-[200px]:max-[480px]:order-4 min-[200px]:max-[480px]:col-start-1 min-[200px]:max-[480px]:col-span-3">
          <p className=" text-center font-inter font-light text-2xl min-[200px]:max-[480px]:text-lg min-[200px]:max-[480px]:text-left">
            "{t.testimonial}"
          </p>
        </div>
        <div className=" col-span-4 col-start-2 min-[200px]:max-[480px]:order-2 min-[200px]:max-[480px]:col-span-2 min-[200px]:max-[480px]:pl-8 min-[200px]:max-[480px]:mt-4">
          <p className=" font-inter font-medium text-xl text-center min-[200px]:max-[480px]:text-left min-[200px]:max-[480px]:text-base ">
            {t.name}
          </p>
        </div>
        <div className=" text-center font-inter font-medium text-base col-span-4 min-[200px]:max-[480px]:order-3 min-[200px]:max-[480px]:col-span-2 min-[200px]:max-[480px]:text-left min-[200px]:max-[480px]:pl-8 min-[200px]:max-[480px]:pt-1 min-[200px]:max-[480px]:text-sm">
          <p>{t.course.course}</p>
          <p>Batch:{t.course.batch}</p>
        </div>
      </div>
    </div>
  ));

const parentsContent = () =>
  testimonial.Parents.map((t) => (
    <div className="dark:text-white ">
      <div className="grid grid-cols-3 ">
        <div className=" flex items-center desk:justify-start justify-center col-span-1 row-span-3 min-[200px]:max-[480px]:order-1 min-[200px]:max-[480px]:col-span-1 ">
          <img
            className="wide:h-[350px] wide:w-[350px] desk:w-[270px] desk:h-[270px] min-[480px]:max-[1180px]:h-full min-[200px]:max-[480px]:rounded-full min-[200px]:max-[480px]:h-[100px] min-[200px]:max-[480px]:w-[100px]"
            src={t.image}
            alt=""
          />
        </div>
        <div className=" col-span-2 col-start-2 h-[160px] flex justify-center items-center min-[200px]:max-[480px]:order-4 min-[200px]:max-[480px]:col-start-1 min-[200px]:max-[480px]:col-span-3">
          <p className=" text-center font-inter font-light text-2xl min-[200px]:max-[480px]:text-lg min-[200px]:max-[480px]:text-left">
            "{t.testimonial}"
          </p>
        </div>
        <div className=" col-span-4 col-start-2 min-[200px]:max-[480px]:order-2 min-[200px]:max-[480px]:col-span-2 min-[200px]:max-[480px]:pl-8 min-[200px]:max-[480px]:mt-4">
          <p className=" font-inter font-medium text-xl text-center min-[200px]:max-[480px]:text-left min-[200px]:max-[480px]:text-base ">
            {t.name}
          </p>
        </div>
        <div className=" text-center font-inter font-medium text-base col-span-4 min-[200px]:max-[480px]:order-3 min-[200px]:max-[480px]:col-span-2 min-[200px]:max-[480px]:text-left min-[200px]:max-[480px]:pl-8 min-[200px]:max-[480px]:pt-1 min-[200px]:max-[480px]:text-sm">
          <p>
            {t.relation} of {t.parentof}
          </p>
        </div>
      </div>
    </div>
  ));

const Testimonials = () => {
  const [review, setReview] = useState("Students");

  function updateTestimonial(reviewType) {
    setReview(reviewType);
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container p-10 flex flex-row min-[200px]:max-[1180px]:flex-col justify-center items-start ">
      <div className="  min-[200px]:max-[1180px]:w-full flex flex-col min-[200px]:max-[1180px]:flex-row ">
        <div className=" flex flex-row min-[200px]:max-[1180px]:flex-col min-[200px]:max-[1180px]:w-full">
          <button
            className={`desk:w-[140px] h-12 font-inter font-medium text-base ${review === "Alumni" ? "testGradient" : "dark:text-white"}`}
            onClick={() => {
              updateTestimonial("Alumni");
            }}
          >
            ALUMNI
          </button>
          <div
            className={`w-1 min-[200px]:max-[1180px]:h-1 desk:rounded-t-full min-[200px]:max-[1180px]:rounded-l-full ${review === "Alumni" ? "bg-[#003eb9]" : "bg-[#C8C3C3] dark:bg-[#373737]"} min-[200px]:max-[1180px]:w-full`}
          ></div>
        </div>
        <div className=" flex flex-row min-[200px]:max-[1180px]:flex-col min-[200px]:max-[1180px]:w-full">
          <button
            className={`desk:w-[140px] h-12 font-inter font-medium text-base ${review === "Students" ? "testGradient" : "dark:text-white"}`}
            onClick={() => updateTestimonial("Students")}
          >
            STUDENTS
          </button>
          <div
            className={`w-1 min-[200px]:max-[1180px]:h-1 ${review === "Students" ? "bg-[#003eb9]" : "bg-[#C8C3C3] dark:bg-[#373737]"} min-[200px]:max-[1180px]:w-full`}
          ></div>
        </div>
        <div className=" flex flex-row min-[200px]:max-[1180px]:flex-col min-[200px]:max-[1180px]:w-full">
          <button
            className={`desk:w-[140px] h-12 font-inter font-medium text-base ${review === "Parents" ? "testGradient" : "dark:text-white"}`}
            onClick={() => updateTestimonial("Parents")}
          >
            PARENTS
          </button>
          <div
            className={`w-1 min-[200px]:max-[1180px]:h-1 desk:rounded-b-full min-[200px]:max-[1180px]:rounded-r-full ${review === "Parents" ? "bg-[#003eb9]" : "bg-[#C8C3C3] dark:bg-[#373737]"} min-[200px]:max-[1180px]:w-full`}
          ></div>
        </div>
      </div>
      <Slider
        {...settings}
        className="wide:w-3/5 desk:w-3/4 min-[200px]:max-[1180px]:w-full min-[200px]:max-[1180px]:mt-8"
      >
        {review === "Students" && studentContent()}
        {review === "Alumni" && alumniContent()}
        {review === "Parents" && parentsContent()}
      </Slider>
      <div className="w-[144px] h-10 min-[200px]:max-[480px]:hidden min-[200px]:max-[480px]:w-full"></div>
    </div>
  );
};

export default Testimonials;
