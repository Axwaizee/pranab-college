import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useSwipeable } from "react-swipeable";
import Masonry from "react-masonry-css";

const images = [
  "/assets/images/gallery/1.webp",
  "/assets/images/gallery/3.png",
  "/assets/images/gallery/2.png",
  "/assets/images/gallery/1.webp",
  "/assets/images/gallery/2.png",
  "/assets/images/gallery/3.png",
  "/assets/images/gallery/1.webp",
  "/assets/images/gallery/2.png",
  "/assets/images/gallery/3.png ",
];

const HealthSeminar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleNext = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      {" "}
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Health Seminar</p>
      </div>
      <div className="container p-4 mx-auto">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="mb-4 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </Masonry>

        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images.map((src) => ({ src }))}
            index={photoIndex}
            onIndexChange={setPhotoIndex}
            {...swipeHandlers}
          />
        )}
      </div>
    </>
  );
};

export default HealthSeminar;
