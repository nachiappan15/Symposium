import React from "react";
import { Technical } from "../../Data/EventsData";
import EventCard from "../EventCard";

const Events = () => {
  return (
    <>
      
      <div className=" w-full px-20">
        <h1 className="text-3xl font-semibold mb-10 ml-8">Technical Events</h1>
        <div className="  w-full grid  lg:grid-cols-4 gap-8">
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
        <h1 className="text-3xl font-semibold mb-10 ml-8">Non Technical Events</h1>
        <div className="  w-full grid  lg:grid-cols-4 gap-8">
          {/* Event Card */}
          {Technical.map((i) => {
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
