import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useSwipeable } from "react-swipeable";
import Masonry from "react-masonry-css";

const images = [
  "/assets/images/department/sociology/1.jpg",
  "/assets/images/department/sociology/2.jpg",
  "/assets/images/department/sociology/3.jpg",
  "/assets/images/department/sociology/4.jpg",
  "/assets/images/department/sociology/5.jpg",
  "/assets/images/department/sociology/6.jpg",
  "/assets/images/department/sociology/7.jpg",
  "/assets/images/department/sociology/8.jpg",
  "/assets/images/department/sociology/9.jpg",
  "/assets/images/department/sociology/10.jpg",
  "/assets/images/department/sociology/11.jpg",
  "/assets/images/department/sociology/12.jpg",
  "/assets/images/department/sociology/13.jpg",
  "/assets/images/department/sociology/14.jpg",
];

const Sociology = () => {
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
      <div className="flex  text-center items-center justify-center p-8 min-[200px]:max-[1180px]:text-3xl text-5xl font-normal text-white bg-[#003eb9] font-inter">
        <p>Department of Sociology</p>
      </div>
      <div className="flex justify-center p-5 text-justify desk:p-10 dark:text-white">
        <div className="w-full desk:w-3/4">
          <div className="pt-1 ">
            <p>
              The Department of Sociology was established in the year 2004 with
              a permanent affiliation to Nagaland University attained on 12th
              Sept., 2017. Initially it was started as a General paper for the
              Undergraduate course. It was upgraded as an Honours Course for the
              undergraduate level in the year 2011. Aligning with the standards
              of higher education, the Department has introduced Post graduate
              Course in the year 2021.
            </p>

            <br />
            <p>
              <b>Objectives of the Department:</b>
            </p>
            <ol className="list-decimal list-inside ">
              <li className="">
                To develop a strong Sociological foundation in Theories and
                Methodologies.
              </li>
              <li className="">
                To develop critical and analytical thinking among the students.
              </li>
              <li className="">
                To develop a strong awareness about contemporary social issues
                and challenges.
              </li>
              <li className="">
                To inculcate social values and responsibility in the students.
              </li>
            </ol>
            <br />
            <p>
              <b>Departmental Activities:</b>
            </p>
            <ol className="list-decimal list-inside ">
              <li>
                Mental Health Awareness Programmes are conducted to address the
                mental health issues and challenges commonly faced by the
                students.
              </li>
              <li>
                Webinars are conducted with eminent Academicians as a resource
                person.
              </li>
              <li>
                Field trips are organized for the students to gain first hand
                experience in research techniques.
              </li>
              <li>
                Annual Inter College Seminar is conducted to nurture research
                aptitude among the students where they are provided a platform
                to present their research paper.
              </li>
              <li>
                Social service through Sociology Club to inculcate the value of
                being a responsible Social person. Sociology Club takes the
                initiative of visiting Orphanage, Old age homes.
              </li>
            </ol>
            <br />
            <p>
              <b>Best practice of the Department:</b>
            </p>
            <ol className="list-decimal list-inside ">
              <li>
                Formation of Sociology Club: the Club was formed to raise the
                level of social consciousness and responsibility among the
                students.
              </li>
              <li>
                Organizing Student centric seminars: Inter College Seminar is
                conducted to encourage the students to take an interest in
                Academic discourses.
              </li>
              <li>
                Ample opportunity for exposure to fieldwork are provided to the
                students
              </li>
              <li>
                Health Awareness programmes: The department focusses on the well
                being of the students. Hence information and awareness are
                disseminated to the students.
              </li>
            </ol>
            <br />
            <p>
              <b>Faculty Profile:</b>
            </p>
            <ol className="list-decimal list-inside ">
              <li>Mrs. Majakhon Kamei, Head of Department</li>
              <li>Mr. Tongpok</li>
              <li>Ms. Olivia Kikon</li>
              <li>Dr. Alomi Cynthia Shikhu</li>
              <li>Mr. Seiboy Khongsai</li>
            </ol>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Sociology;
