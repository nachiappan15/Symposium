import React from "react";
import { motion } from "framer-motion";

// Data
import EventsData from "../Data/EventsData";
// Components
import EventCard from "../Components/EventCard";

const Events = () => {
  return (
    <>

<motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} className=" grow py-5 lg:py-10 w-full flex flex-col  lg:px-20 px-8  ">

        <div className="">
          <h1 className="text-center text-2xl lg:text-5xl font-bold text-white underline">EVENTS</h1>
          <p className='text-center text-xs lg:text-base font-semibold text-paragraph mb-3 lg:mb-6'>
            Choose the event you want to participate
          </p>
        </div>

        <h1 className=" text-xl lg:text-3xl font-semibold lg:mb-10 mb-4  text-headline">Technical Events</h1>
        <div className="  w-full grid  lg:grid-cols-4 lg:gap-8 gap-3">
          {/* Event Card */}
          {EventsData.map((i) => {
            if (i.type === "technical") {
              return (
                <>
                  <EventCard {...i} />
                </>
              );
              
            }
            return<></>

          })}
        </div>

        {/* <h1 className="text-3xl font-semibold my-10  ml-8"> Non Technical Events</h1> */}
        <h1 className="text-xl lg:text-3xl font-semibold lg:mb-10 my-4  text-headline">Non Technical Events</h1>
        <div className="  w-full grid  lg:grid-cols-4 gap-4 lg:gap-8">
          {/* Event Card */}
          {EventsData.map((i) => {
            if (i.type === "nontechnical") {
              return (
                <>
                  <EventCard {...i} />
                </>
              );
            }
            return<></>

          })}
        </div>
        
      </motion.div>
      
    </>
  );
};

export default Events;
