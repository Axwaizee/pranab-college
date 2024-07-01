import React from "react";
import "./styles/Motto.css";

const Motto = () => {
  return (
    <div className="flex justify-center items-center desk:max-[1919px]:mt-[50px] desk:mt-[100px] mt-10 min-[200px]:max-[1180px]:px-5">
      <div className="flex">
        <div className="flex items-center justify-center min-[200px]:max-[1180px]:hidden ">
          <div className=" mr-[120px]">
            <p
              id="motto"
              className=" font-inter font-medium text-6xl leading-[120px]"
            >
              Educate <br />
              Encourage <br /> Enlighten
            </p>
          </div>
        </div>
        <div className="desk:min-h-[500px] desk:w-[500px] bg-[#A79AFF] rounded-[25px] p-8">
          <div className=" font-inter text-3xl font-medium">
            <p>Event Board</p>
          </div>
          <div className="mt-4 text-lg">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident facere nobis cum ipsa molestias. Voluptatum recusandae
              sed voluptatem modi officiis laboriosam aliquam aspernatur odit
              cupiditate perferendis cumque ullam provident labore, magnam
              blanditiis! Quia placeat adipisci error pariatur omnis at, vel nam
              obcaecati molestiae sequi illum repellendus odio vitae
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motto;
