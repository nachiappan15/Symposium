import React from "react";
import Timer from "../Timer";
import ozmenta from "../../images/ozmenta.svg"

const Home = () => {
  return (
    <div className=" grow flex flex-col lg:gap-8 gap-10 items-center justify-center  py-10 ">
      <div className="flex items-center flex-col justify-center gap-2">
        <span className="text-sm lg:text-3xl font-semibold text-headline">
          Departmet of Computer Science and Engineering
        </span>
        <span className=" text-sm lg:text-xl text-white">Presents</span>
        {/* <span className=" text-5xl lg:text-8xl font-bold grad_text mt-3">
          OZMENTA ` 22
        </span> */}
        <img src={ozmenta} className="lg:w-2/3 "/>

      </div>
      <Timer />
      <div className="flex flex-row  gap-4 lg:gap-14 lg:text-xl text-sm font-semibold ">
        <button className="bg-highlight text-backgroun1 text-logo2 p-2 lg:px-4 lg:py-2 rounded-md font-semibold hover:scale-110">View Events</button>
        <button className="text-white bg-gray-900 p-2 lg:px-4 lg:py-2 rounded-md font-semibold hover:scale-110">Register Now</button>
      </div>


    </div>
  );
};

export default Home;


// https://vincentgarreau.com/particles.js/#default