import React from "react";
// import hack from "../images/Hackathon.jpg"

const EventCard = ({Name , img}) => {
  return (
    <div className=" h-72 bg-card rounded-xl p-2 flex flex-col items-center">
      <img src={`../images/`+img} className="w-full rounded-lg" />
      <h1 className="text-2xl mt-4 ">{Name}</h1>
      <h1 className="text-sm  mt-2 border px-2 rounded-md">Event info</h1>
    </div>
  );
};

export default EventCard;
