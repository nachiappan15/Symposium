import React from "react";
import Timer from "../Components/Timer";
import ozmenta from "../images/ozmenta.png"

import { Link} from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    className="h-full  flex flex-auto flex-col lg:gap-8 gap-10 items-center    py-20  lg:py-5">
      <div className="flex items-center flex-col justify-center gap-2 text-center">
        <span className="text-sm lg:text-3xl font-semibold text-headline">
          Department of Computer Science and Engineering
        </span>
        <span className=" text-sm lg:text-xl text-white">Presents</span>
        {/* <span className=" text-5xl lg:text-8xl font-bold grad_text mt-3">
          OZMENTA ` 22
        </span> */}
        <img src={ozmenta} className="lg:w-2/3 " alt=""/>

      </div>
      <Timer />
      <div className="flex lg:flex-row flex-col  gap-4 lg:gap-14 lg:text-xl text-sm font-semibold ">
      <Link to="/events"> <button className="bg-highlight text-backgroun1 text-logo2 p-2 lg:px-4 lg:py-2 rounded-md font-semibold hover:scale-110">View Events</button></Link>
      <Link to="/register"> <button className="text-white bg-gray-900 p-2 lg:px-4 lg:py-2 rounded-md font-semibold hover:scale-110">Register Now</button></Link>
      </div>


    </motion.div>
  );
};

export default Home;


// https://vincentgarreau.com/particles.js/#default