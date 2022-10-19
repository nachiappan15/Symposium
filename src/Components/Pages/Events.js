import React from "react";
import { Technical , NonTechnical } from "../../Data/EventsData";
import EventCard from "../EventCard";

const Events = () => {
  return (
    <>

      <div className=" grow py-5 lg:py-10 w-full flex flex-col  lg:px-20 px-8  ">
        <div className="">
          <h1 className="text-center text-2xl lg:text-5xl font-bold text-white underline">EVENTS</h1>
          <p className="text-center mt-1 text-sm lg:text-lg font-semibold text-paragraph">
            Choose the event you want to participate
          </p>

        </div>

        <h1 className=" text-xl lg:text-3xl font-semibold lg:mb-10 mb-4  text-headline">Technical Events</h1>
        <div className="  w-full grid  lg:grid-cols-4 lg:gap-8 gap-3">
          {/* Event Card */}
          {Technical.map((i) => {
            return (
              <>
                <EventCard {...i} />
              </>
            );
          })}
        </div>

        {/* <h1 className="text-3xl font-semibold my-10  ml-8"> Non Technical Events</h1> */}
        <h1 className="text-xl lg:text-3xl font-semibold lg:mb-10 my-4  text-headline">Non Technical Events</h1>
        <div className="  w-full grid  lg:grid-cols-4 gap-4 lg:gap-8">
          {/* Event Card */}
          {NonTechnical.map((i) => {
            return (
              <>
                <EventCard {...i} />
              </>
            );
          })}
        </div>

      </div>
    </>
  );
};

export default Events;
