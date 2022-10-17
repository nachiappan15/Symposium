import React from "react";
import Timer from "../Timer";

const Home = () => {
  return (
    <div className="  flex flex-col lg:gap-20 gap-10 items-center justify-center mt-20 ">
      <div className="flex items-center flex-col justify-center gap-">
        <span className="text-sm lg:text-3xl font-semibold text-white">
          Departmet of Computer Science and Engineering
        </span>
        <span className=" text-sm lg:text-xl text-white">Presents</span>
        <span className=" text-5xl lg:text-9xl font-bold grad_text">
          OZMENTA
          </span>
          <span className="text-4xl font-bold grad_text">
          2022
        </span>
        
      </div>
      <Timer/>
      <div className="flex lg:flex-row flex-col gap-8 lg:gap-14 lg:text-xl ">
        <button className="bg-white text-logo2 p-2 lg:px-4 lg:py-2 rounded-md font-semibold hover:scale-110">View Events</button>
        <button className="text-white bg-gray-900 p-2 lg:px-4 lg:py-2 rounded-md font-semibold hover:scale-110">Register Now</button>
      </div>
      

    </div>
  );
};

export default Home;
